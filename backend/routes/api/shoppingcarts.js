const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Save, Offer, Restaurant, ShoppingCart, MenuItem, CartItem, CartItemNotes, ItemSelection, RestaurantImage, RestaurantTime, Review } = require('../../db/models');

const router = express.Router();

router.get('/discounts', async (req, res) => {

    const discounts = await Offer.findAll({
        order: [
            ['createdAt', 'DESC']
        ],
        include: [
            { model: Restaurant },
            {
                model: Restaurant,
                include: [
                    { model: RestaurantImage }
                ]
            }

        ]
    })

    res.json( discounts )

})

router.get('/:id/discount', async (req, res) => {
    let discountId = req.params.id;
    let discountExist = await Restaurant.findByPk(discountId);

    if (!discountExist) {

        res.status(404).json({"message": "Discount couldn't be found"});

    }
    const discount = await Offer.findByPk(discountId)

    res.json( discount )

})


router.post('/', async (req, res) => {
    const { user } = req
    let { sessionId } = req.body
    const userId = user?.dataValues.id

    if (!userId && sessionId) {

        let cart = await ShoppingCart.findAll({
            where : {
                sessionId,
                status: "Ordering"
            },
            include : [
                { model: CartItem,
                    include : [
                        { model: MenuItem },
                        {
                            model: CartItemNotes,
                            include : [
                                {
                                    model: ItemSelection,
                                }
                            ]
                        }
                    ]
                 },
                { model: Restaurant,
                    include : [
                        { model: RestaurantImage }
                    ]
                 }
            ]
        });

        if (!cart) {

            res.json({"message": "Shopping Cart couldn't be found"});

        }

        res.json( cart )

    }
    else if (userId) {

        let cart = await ShoppingCart.findAll({
            where : {
                userId,
                status: "Ordering"
            },
            include : [
                { model: CartItem,
                    include : [
                        { model: MenuItem },
                        {
                            model: CartItemNotes,
                            include : [
                                {
                                    model: ItemSelection,
                                }
                            ]
                        }
                    ]
                 },
                { model: User },
                { model: Restaurant,
                    include : [
                        { model: RestaurantImage }
                    ]
                 }
            ]
        });

        if (!cart) {

            res.json({"message": "Shopping Cart couldn't be found"});

        }

        res.json( cart )
    }
    else {
        res.json({"message": "Please try again later"});

    }


})

router.get('/orders', async (req, res) => {
    const { user } = req
    const userId = user?.dataValues.id

    if (!userId) {

        return res.json({"message": "Please login"});

    }

    let cart = await ShoppingCart.findAll({
        where : {
            userId,
            status: "Ordered"
        },
        include : [
               { model: Restaurant,
                include: [
                    { model: MenuItem },
                    { model: RestaurantTime },
                    { model: Review },
                    { model: Offer },
                    { model: RestaurantImage },
                    { model: Save }
                    ]
                },
                { model: CartItem,
                    include: [
                        { model: MenuItem },
                        { model: CartItemNotes,
                            include : [
                                {
                                    model: ItemSelection,
                                }
                            ]
                            }
                        ]
                },
                {
                    model: User
                }
            ]
    });


    if (!cart) {

        res.json({"message": "Shopping Cart couldn't be found"});

    }

    res.json( cart )

})

router.get('/ordered', async (req, res) => {
    try {
        const { user } = req;
        const userId = user?.dataValues?.id;

        if (!userId) {
            return res.status(401).json({ message: "Please login" });
        }

        let cart = await ShoppingCart.findAll({
            where: { status: "Ordered" },
            include: [
                {
                    model: Restaurant,
                    include: [
                        { model: MenuItem },
                        { model: RestaurantTime },
                        { model: Review },
                        { model: Offer },
                        { model: RestaurantImage },
                        { model: Save }
                    ]
                },
                {
                    model: CartItem,
                    include: [
                        { model: MenuItem },
                        {
                            model: CartItemNotes,
                            include: [
                                { model: ItemSelection }
                            ]
                        }
                    ]
                }
            ]
        });

        if (!cart || cart.length === 0) {
            return res.status(404).json({ message: "Shopping Cart couldn't be found" });
        }

        const restaurantOrdersCount = cart.reduce((acc, cartItem) => {
            const restaurantId = cartItem.Restaurant.id;
            acc[restaurantId] = (acc[restaurantId] || 0) + 1;
            return acc;
        }, {});

        cart.sort((a, b) => restaurantOrdersCount[b.Restaurant.id] - restaurantOrdersCount[a.Restaurant.id]);

        const uniqueRestaurantIds = new Set();
        const uniqueCart = cart.filter(cartItem => {
            const restaurantId = cartItem.Restaurant.id;
            if (uniqueRestaurantIds.has(restaurantId)) {
                return false;
            }
            uniqueRestaurantIds.add(restaurantId);
            return true;
        });

        return res.json(uniqueCart);
    } catch (error) {
        console.error("Error fetching ordered cart: ", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});


router.get('/:id/ordered', async (req, res) => {
    const { user } = req
    const userId = user?.dataValues.id
    let restauranId = req.params.id;
    let restaurantExist = await Restaurant.findByPk(restauranId);

    if (!restaurantExist) {

        res.json({"message": "Restaurant couldn't be found"});

    }

    let items = await Restaurant.findByPk( restauranId, {
        include : [

                    { model: MenuItem },
                    { model: RestaurantTime },
                    { model: Review },
                    { model: Offer },
                    { model: RestaurantImage },
                    { model: Save },
                {
                    model: ShoppingCart,
                    where : {
                        status: "Ordered",
                    },
                    include: [
                        { model: CartItem,
                        include: [
                            { model: MenuItem },
                            { model: CartItemNotes,
                                include : [
                                    {
                                        model: ItemSelection,
                                    }
                                ]
                            }
                        ]
                    }
                    ]
                }
            ]
    });


    const menuOrdersCount = items?.ShoppingCarts.reduce((acc, order) => {
        const orderId = order.id;
        acc[orderId] = (acc[orderId] || 0) + 1;
        return acc;
    }, {});

    items?.ShoppingCarts.sort((a, b) => menuOrdersCount[b.id] - menuOrdersCount[a.id]);

    const uniqueMenuItemIds = new Set();

    const uniqueItems = items?.ShoppingCarts.filter(order => {
        const orderId = order.id;
    if (uniqueMenuItemIds.has(orderId)) {
        return false;
    }
    uniqueMenuItemIds.add(orderId);
    return true;
    });



    res.json( uniqueItems )

})

router.put('/:id', async (req, res) => {
    let cartId = req.params.id;
    let cartExist = await ShoppingCart.findByPk(cartId);
    let { price } = req.body
    const { user } = req

    if (!cartExist) {

        res.json({"message": "Shopping cart couldn't be found"});

    }

    cartExist.set({
        status: "Ordered",
        price
    })

    await cartExist.save()

    let cart = await ShoppingCart.findByPk( cartId, {
        include : [
            {
                model: CartItem,
                include : [
                    {
                        model: MenuItem,
                    },
                    {
                        model: CartItemNotes,
                        include : [
                            {
                                model: ItemSelection,
                            }
                        ]
                    }
                ]
             },
            { model: User },
            { model: Restaurant }
        ]
    });


    if (!cart) {

        res.json({"message": "Shopping Cart couldn't be found"});

    }

    res.json( cart )

})

router.post('/:id', async (req, res) => {
    let restaurantId = req.params.id;
    let restaurantExist = await Restaurant.findByPk(restaurantId);
    let { sessionId } = req.body;
    const { user } = req
    const userId = user?.dataValues.id

    if (!userId) {

        let cart = await ShoppingCart.create({
            restaurantId,
            sessionId
        })

        let c = await ShoppingCart.findByPk(cart.dataValues.id, {
            include : [
                { model: CartItem },
                { model: Restaurant }
            ]
        });

        res.json( c )

    }

    if (!restaurantExist) {

        res.json({"message": "Restaurant couldn't be found"});

    }

    let cart = await ShoppingCart.create({
        restaurantId,
        userId,
    })

    let c = await ShoppingCart.findByPk(cart.dataValues.id, {
        include : [
            { model: CartItem },
            { model: User },
            { model: Restaurant }
        ]
    });

    res.json( c )

})

router.post('/:id/item', async (req, res) => {
    let cartId = req.params.id;
    let cartExist = await ShoppingCart.findByPk(cartId);
    let { itemId, options, quantity } = req.body;
    const { user } = req

    if (!cartExist) {

        res.json({"message": "Restaurant couldn't be found"});

    }

    let itemsExist = await CartItem.findAll({
        where: {
            cartId,
            itemId
        },
        include: [
            { model: CartItemNotes }
        ]
    })

    let c
    let more = false

    for (let itemExist of itemsExist) {
        let notes = itemExist.dataValues.CartItemNotes
        more = notes.length == 0 && options.length == 0 ? true : false
        if (!more && notes.length) {
            more = options.every(option =>
                notes.some(note => note.dataValues.selectionId === option)
            );
        }

        if (more) {
            let ci = await CartItem.findByPk(itemExist.dataValues.id)
            let q = ci.dataValues.quantity + quantity

            let newCi = ci.set({
                quantity: q
            })

            await newCi.save()

            c = await CartItem.findByPk(itemExist.dataValues.id, {
                include : [
                    {
                        model: MenuItem
                    },
                    {
                        model: CartItemNotes,
                        include : [
                            {
                                model: ItemSelection,
                            }
                        ]
                    },
                    { model: ShoppingCart },
                ]

            });

             res.json( c )
        }

    }

    if (!more) {

        let item = await CartItem.create({
            cartId,
            quantity,
            itemId,
        })

        if (options?.length) {
            for (let selectionId of options) {
                let selected = await CartItemNotes.create({
                    itemId: item.dataValues.id,
                    selectionId
                })
            }
        }


        c = await CartItem.findByPk(item.dataValues.id, {
            include : [
                {
                    model: MenuItem
                 },
                 {
                    model: CartItemNotes,
                    include : [
                        {
                            model: ItemSelection,
                        }
                    ]
                },
                { model: ShoppingCart },
            ]
        });

    }

    res.json( c )

})

router.put('/:id/item', async (req, res) => {
    let itemId = req.params.id;
    let itemExsit = await CartItem.findByPk(itemId);
    let { quantity } = req.body;
    const { user } = req
    const userId = user.dataValues.id

    if (!itemExsit) {

        res.json({"message": "Cart item couldn't be found"});

    }

    let item = await itemExsit.set({
        quantity
    })

    await item.save()

    let i = await CartItem.findByPk(itemId, {
        include : [
            {
                model: MenuItem
             },
             {
                model: CartItemNotes,
                include : [
                    {
                        model: ItemSelection,
                    }
                ]
            },
            { model: ShoppingCart },
        ]
    });



    res.json( i )

})

router.delete('/:id', async (req, res) => {
    let cartId = req.params.id;
    let cartExist = await ShoppingCart.findByPk(cartId);

    if (!cartExist) {

        res.json({"message": "Shopping Cart couldn't be found"});

    }

    cartExist.destroy()

    res.json( {message: "Shopping Cart sucessfully deleted"} )

})


router.delete('/:id/item', async (req, res) => {
    let itemId = req.params.id;
    let itemExsit = await CartItem.findByPk(itemId);

    if (!itemExsit) {

        res.json({"message": "Cart Item couldn't be found"});

    }

    itemExsit.destroy()

    res.json( {message: "Cart Item sucessfully deleted"} )

})




module.exports = router;
