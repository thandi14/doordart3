'use strict';

const { MenuItem } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await MenuItem.bulkCreate([
      {
        restaurantId: 1,
        item: "10 Piece McNuggets Meal",
        description: "The 10 Piece McNuggets Meal comes with a 10 Piece McNuggets, McDonald's World Famous Fries®, and a Drink. Enjoy tender, juicy Chicken McNuggets® with your favorite dipping Sauces. Wondering what are McDonald's Chicken Nuggets made of? Chicken McNuggets® are made with all white meat chicken and no artificial colors, flavors, or preservatives.",
        cals: "740 - 980",
        price: 9.49,
        category: "Combo Meals, Mcnuggets & Meals",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/44ada25a-987c-4295-8818-da57cfd60f0a-retina-large.jpg"
      },
      {
        restaurantId: 1,
        item: "Big Mac Meal",
        description: "The Big Mac Meal comes with a Big Mac, McDonald's World Famous Fries®, and a Drink. Ever wondered what's on a Big Mac®? The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese. It contains no artificial flavors, preservatives, or added colors from artificial sources. Our pickle contains an artificial preservative, so skip it if you like.",
        cals: "910 - 1150",
        price: 8.89,
        category: "Combo Meals",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/335aa95b-76ec-43f7-8f56-64e090ad0919-retina-large.jpg"
      },
      {
        restaurantId: 1,
        item: "Double Cheeseburger",
        description: "The McDonald's Double Cheeseburger features two 100% pure all beef patties seasoned with just a pinch of salt and pepper. It's topped with tangy pickles, chopped onions, ketchup, mustard, and two melty American cheese slices. Wondering what is the difference between McDouble and Double Cheeseburger? It's the extra slice of American cheese in the Double Cheeseburger.",
        cals: "450",
        price: 3.59,
        category: "Individual Items",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/bf56fe28-8689-45cf-8d47-8e1944743734-retina-large.jpg",
      },
      {
        restaurantId: 1,
        item: "20 Piece McNuggets",
        description: "Enjoy tender, juicy Chicken McNuggets® with your favorite dipping Sauces. Wondering what are McDonald's Chicken Nuggets made of? Chicken McNuggets® are made with all white meat chicken and no artificial colors, flavors, or preservatives.",
        cals: "830",
        price: 8.29,
        category: "Individual Items",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/af2958fc-5413-4611-9971-898f767d6fd2-retina-large.jpg"
      },
      {
        restaurantId: 1,
        item: "6 pc. Chicken McNuggets® Happy Meal®",
        description: "Enjoy a McDonald’s Happy Meal® and get six tender Chicken McNuggets® made with white meat with kid-sized World Famous Fries and a side of Apple Slices. Then pick a kids’ drink. Plus, every McDonald’s kids’ meal comes with a McDonald’s Happy Meal® toy!",
        cals: "430 - 530",
        price: 5.99,
        category: "Combo Meals, Mcnuggets & Meals, Happy Meals",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/422b22f9-5042-424c-b4ab-617250d2898c-retina-large.jpg"
      },
      {
        restaurantId: 1,
        item: "French Fries",
        description: "McDonald's World Famous Fries® are made with premium potatoes such as the Russet Burbank and the Shepody. With 0g of trans fat per labeled serving, these epic fries are crispy and golden on the outside and fluffy on the inside.",
        cals: "230 - 480",
        price: 2.59,
        category: "Individual Items, Fries",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/dfd0ab4e-3e54-4829-a505-37a91417c98f-retina-large.jpg"
      },
      {
        restaurantId: 1,
        item: "Hot and Spicy McChicken",
        cals: "400",
        price: 9.49,
        category: "Individual Items",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/7872ab2c-d5f7-4c84-8f81-a235225f8337-retina-large.jpg"
      },
      {
        restaurantId: 1,
        item: "Double Quarter Pounder with Cheese Meal",
        description: "The Double Quarter Pounder with Cheese Meal comes with a Double Quarter Pounder with Cheese, McDonald's World Famous Fries®, and a Drink. Each Double Quarter Pounder with Cheese features two quarter pound 100% fresh beef burger patties that are hot, deliciously juicy and cooked when you order. McDonald’s beef patties are seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty cheese on a sesame seed bun. It contains no artificial flavors, preservatives or added colors from artificial sources. Our pickle contains an artificial preservative, so skip it if you like.",
        cals: "1060 - 1300 cal",
        price: 10.69,
        category: "Combo Meals",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/81a426ee-9c34-4dc6-84f2-4895d355509d-retina-large.jpg"
      },
      {
        restaurantId: 1,
        item: "40 pc. Spicy Chicken McNuggets® & 2 Large Fries",
        cals: "2670 cal",
        price: 24.99,
        category: "Shareables",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/7c408ce3-0fd9-4359-b709-ff53c247f92e-retina-large.jpg"
      },
      {
        restaurantId: 1,
        item: "Basket of Fries",
        cals: "630 cal",
        price: 5.59,
        category: "Shareables",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/0822f132-2d31-438f-9463-0f82644ddcde-retina-large.jpg"
      },
      {
        restaurantId: 1,
        item: "13 Cookie Tote",
        cals: "1820 - 2210 cal",
        price: 5.59,
        category: "Shareables",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/ac521aff-f1a7-4579-9add-e590ee1ab065-retina-large.jpg"
      },
      {
        restaurantId: 1,
        item: "20 pc. Spicy Chicken McNuggets® & 2 Medium Fries",
        cals: "1490 cal",
        price: 15.99,
        category: "Shareables",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/622297b0-5e98-446d-97ad-80537b1fc16f-retina-large.jpg"
      },
      {
        restaurantId: 1,
        item: "Hamburger Happy Meal®",
        description: "McDonald's Hamburger Happy Meal® includes a juicy McDonald's Hamburger with kid sized world famous fries and apple slices. Then pick a kid’s drink. Plus, a McDonald’s Happy Meal® toy that completes every McDonald’s Kids meal.",
        cals: "380 - 510 cal",
        price: 4.69,
        category: "Happy Meals",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/16f81769-9ea2-430a-b923-3f9e00f2aefa-retina-large.jpg"
      },
      {
        restaurantId: 1,
        item: "4 pc. Chicken McNugget® Happy Meal®",
        description: "Grab a McDonald’s Happy Meal® and get four tender Chicken McNuggets® made with white meat with kid-sized World Famous Fries and a side of Apple Slices. Then pick a kids’ drink. Plus, a fun toy completes every McDonald's kid's meal.",
        cals: "300 - 430 cal",
        price: 5.19,
        category: "Happy Meals",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/16f81769-9ea2-430a-b923-3f9e00f2aefa-retina-large.jpg"
      },
      {
        restaurantId: 1,
        item: "Mocha Frappe",
        description: "Enjoy McCafé®'s cold and creamy Mocha Frappé. Wondering what’s in a Mocha Frappé from McDonald’s? Made with rich chocolate flavor and a hint of coffee, our Mocha Frappé recipe is blended with ice and topped with whipped light cream and chocolatey drizzle.",
        cals: "430 - 660 cal",
        price: 5.29,
        category: "McCafé® Coffees",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/19245278-bece-4fd2-aa42-2a17c6db4f8d-retina-large.jpg"
      },
      {
        restaurantId: 1,
        item: "Caramel Frappe",
        description: "McDonald's Caramel Frappé recipe is made with rich caramel flavor and a hint of coffee, blended with ice, and topped with whipped topping and caramel drizzle.",
        cals: "420 - 650 cal",
        price: 5.29,
        category: "McCafé® Coffees",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/19245278-bece-4fd2-aa42-2a17c6db4f8d-retina-large.jpg"
      },
      {
        restaurantId: 1,
        item: "Iced French Vanilla Latte",
        description: "Cool down with a McCafé® Iced French Vanilla Latte, made with Rainforest Alliance Certified™ espresso. Our McDonald’s Iced Vanilla Latte recipe features bold espresso, whole milk and sweet French vanilla syrup.",
        cals: "420 - 650 cal",
        price: 5.29,
        category: "McCafé® Coffees",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/5eb72f5b-d2cd-41b2-9549-ab14f085f989-retina-large.jpg"
      },
      {
        restaurantId: 1,
        item: "Iced Mocha",
        description: "Made with sustainably sourced espresso beans from Rainforest Alliance Certified™ farms, our refreshingly cool Iced Mocha Latte recipe is made with whole milk, chocolate syrup, and finished with whipped light cream and chocolate drizzle.",
        cals: "270 - 440 cal",
        price: 4.59,
        category: "McCafé® Coffees",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/a4a50ec3-4329-4cb0-9535-6a8d8d4d5b01-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Chili Cheese Coney Combo",
        description: "Want something filling that's also a great deal? Try SONIC's Premium Beef Chili Cheese Coney. A grilled beef hot dog topped with warm chili and melty cheddar cheese served in a soft, warm bakery bun. Even better with a Side and Drink included!Want something filling that's also a great deal? Try SONIC's Premium Beef Chili Cheese Coney. A grilled beef hot dog topped with warm chili and melty cheddar cheese served in a soft, warm bakery bun. Even better with a Side and Drink included!",
        price: 10.34,
        category: "Combos",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/013f815f-73d2-4eea-a486-5430de573f5a-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "SONIC® Cheeseburger Combo",
        description: "What you see is what you get. A juicy, perfectly seasoned, quarter pound, 100% pure beef patty layered with melty American cheese, crisp, crinkle cut pickles, tangy ketchup, diced onions, creamy mayo, crisp lettuce, and hand sliced tomatoes on a golden, toasted bun. Straightforward and tasty, just the way it should be. Even better with a Side and Drink included!",
        price: 12.66,
        category: "Combos",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/4b73d06c-a31f-4753-81cc-c2952d34599d-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "SuperSONIC® Bacon Double Cheeseburger Combo",
        description: "Bacon makes everything better - especially when it's as good as our SuperSONIC® Double Cheeseburger. We start with two quarter-pound, 100% pure beef hamburgers, two melty slices of American cheese, lettuce, fresh sliced tomatoes, with mayo and top it all off with crispy bacon. Even better with a Side and Drink included!",
        price: 15.46,
        category: "Combos",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=768,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/068d1745-3cef-4d31-98ec-40f796702251-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Footlong Quarter Pound Coney Combo",
        description: "Want something filling that's also a great deal? Try SONIC's Footlong Chili Cheese Coney. A grilled hot dog topped with warm chili and melty cheddar cheese served in a soft, warm bakery bun. Even better with a Side and Drink included!",
        price: 13.02,
        category: "Combos",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=768,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/1ec4a7f8-4095-4f4b-b7e5-bb6d924b6f06-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Garlic Butter Bacon Cheeseburger Combo",
        description: "Served with fries and medium drink. 100% all beef patty with creamy garlic butter, american cheese, crispy bacon, mayo, and grilled onions.",
        price: 13.88,
        category: "Combos",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/6d80c0c3-d7d5-4712-beab-60c0b5390861-retina-large.png"
      },
      {
        restaurantId: 6,
        item: "SuperSONIC® Double Cheeseburger Combo",
        description: "Double the SONIC® goodness with the SuperSONIC® Cheeseburger. Two juicy, perfectly seasoned, quarter pound, 100% pure beef patties that are layered with two slices of melty American cheese, crisp, crinkle cut pickles, tangy ketchup, diced onions, creamy mayo, crisp lettuce, and hand sliced tomatoes on a golden, toasted bun. Seeing double has never been tastier. Even better with a Side and Drink included!",
        price: 14.99,
        category: "Combos",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/0d4e6055-a23c-4ba2-941c-0688471132a7-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Crispy Chicken Sandwich Combo",
        description: "Lightly seasoned and breaded 100% all white meat chicken breast topped with fresh lettuce, ripe tomatoes and mayo; served on a warm Brioche bun. Even better with a Side and Drink included!",
        price: 14.00,
        category: "Combos",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/a1238ea9-700a-4058-beac-b9312b9b3249-retina-large.png"
      },
      {
        restaurantId: 6,
        item: "All-American Dog Combo",
        description: "Take a bite out of Americana with SONIC's Premium Beef All-American Dog. It's a beef hot dog made with 100% pure beef that's grilled to perfection and topped with ketchup, yellow mustard, relish and chopped onions and served in a soft, warm bakery bun. Even better with a Side and Drink included!",
        price: 10.21,
        category: "Combos",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/1fde6ea6-66af-490c-8045-4316b154ed76-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Jumbo Popcorn Chicken® Combo",
        description: "Enjoy a crispy snack, or put together the perfect combo meal with our Jumbo Popcorn Chicken®, made with juicy all white meat. Even better with a Side and Drink included!",
        price: 13.76,
        category: "Combos",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/95024153-ee2b-4b9a-a3e9-e9b8f7fefd7d-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "SuperSONIC® Breakfast Burrito Combo",
        description: "Let the big flavor of the SuperSONIC® Breakfast Burrito get you out of bed. A medley of savory sausage, fluffy scrambled eggs, melty cheddar cheese, golden tots, diced onions, ripe tomatoes and spicy jalapeños all wrapped up in a warm flour tortilla. It'll sing to your taste buds. Which, if you ask us, is a pretty cool way to start your morning. Even better with a Side and Drink included!",
        price: 12.66,
        category: "Combos, All Day Breakfast",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/478af835-36e0-4c65-aa7e-83cf615164dd-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Bacon Breakfast TOASTER® Combo",
        description: "Behold – melty cheese, crispy bacon all stacked up on thick Texas Toast and served with fluffy eggs. Sounds like breakfast heaven if you ask us. Even better with a Side and Drink included!",
        price: 11.93,
        category: "Combos, All Day Breakfast",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/a6bfe39e-0c2b-40ab-afe9-7b8f0222b984-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Ultimate Meat & Cheese Breakfast Burrito™ Combo",
        description: "Breakfast doesn't get better than the all-new Ultimate Meat & Cheese Breakfast Burrito™ with crispy bacon, savory sausage, golden tots, fluffy scrambled eggs and melty cheddar cheese, all wrapped in a warm flour tortilla. Even better with a Side and Drink included!",
        price: 12.17,
        category: "Combos, All Day Breakfast",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/45bb7ef2-3c3c-4b88-b463-82dcca5da13c-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Hickory BBQ Cheeseburger Combo",
        description: "Includes choice of tots or fries and fountain drink. served with hickory bbq sauce, pickles, onions, lettuce, cheese and bacon.",
        price: 12.66,
        category: "Combos",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/92d6142b-17a7-49d0-a5a9-b3f7b2398104-retina-large.png"
      },
      {
        restaurantId: 6,
        item: "Sausage Breakfast Burrito Combo",
        description: "Kick start your morning with the same SONIC goodness of a simple breakfast burrito. Scrambled eggs, melty cheddar cheese and savory sausage, all wrapped up in a warm flour tortilla. Even better with a Side and Drink included!",
        price: 11.32,
        category: "Combos, All Day Breakfast",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/920ea986-b16d-40aa-a8cd-04ae52986a80-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Bacon Breakfast Burrito Combo",
        description: "Kick start your morning with the same SONIC goodness of a simple breakfast burrito. Scrambled eggs, melty cheddar cheese and crispy bacon, all wrapped up in a warm flour tortilla. Even better with a Side and Drink included!",
        price: 11.32,
        category: "Combos, All Day Breakfast",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/3513c199-cbb8-4b42-9126-1d0cb38ffa5f-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Sausage Breakfast TOASTER® Combo",
        description: "Behold – melty cheese, your choice of savory sausage, crispy bacon or delicious ham, all stacked up on thick Texas Toast and served with fluffy eggs. Sounds like breakfast heaven if you ask us. Even better with a Side and Drink included!",
        price: 11.93,
        category: "Combos, All Day Breakfast",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/8d6ed84e-cafb-4611-a2e5-5ba842eb14f6-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "French Toast Sticks Combo",
        description: "Three's a crowd, and four is a delicious bundle of breakfast delight. At least when it comes to our thick, golden French Toast Sticks complete with One maple-flavored syrup for dipping. Drink Included!",
        price: 7.42,
        category: "Combos, All Day Breakfast",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=768,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/9f5042a0-5610-49eb-bf77-6b52ffdda25d-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Soft Drinks",
        description: "More options of cold, bubbly refreshments with your choice of flavor add-ins, all served over our famous SONIC ice.",
        price: 2.94,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/9807a19d-7880-4037-9ccf-ab594eb9ab16-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Iced Tea",
        description: "Your destination for everything iced tea!",
        price: 2.43,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/d7e1d3a4-1c63-498c-935d-1b38da77d73b-retina-large.png"
      },
      {
        restaurantId: 6,
        item: "Famous Slushes",
        description: "So good, they're famous. That's probably all you need to know. Oh, and they’re only at SONIC.",
        price: 1.45,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/4dd3eb04-3e2b-43d9-bba9-00cdf23e64c2-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Dragon Fruit Recharger",
        description: "Sweet dragon fruit flavor in a fizzy drink infused with the energy or red bull®",
        price: 4.87,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=768,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/7fa1a612-f791-4334-af91-3267db2a663c-retina-large.png"
      },
      {
        restaurantId: 6,
        item: "Blood Orange Recharger",
        description: "The citrusy flavor of blood orange in a fizzy drink infused with the energy of red bull®",
        price: 4.87,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=768,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/6076a755-f20d-4bcf-9c58-af868f2fad66-retina-large.png"
      },
      {
        restaurantId: 6,
        item: "Water",
        description: "Water served over sonic's famous ice.",
        price: 0.37,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/247d7f3c-d231-4088-88d7-4b9ebffa59fd-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Real Fruit Slushes",
        description: "SONIC’s craveable, icy slush made more delicious with real fruit!",
        price: 1.57,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/c530ec53-5167-4c1e-89e0-8d06d786a65e-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Red Bull Energy Drink",
        description: "Red bull energy drink 8.4 oz can is a carbonated drink that gives you wings.",
        price: 3.89,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/42f31e43-1237-4f53-b1eb-06d80af6dd6f-retina-large.png"
      },
      {
        restaurantId: 6,
        item: "Cup of SONIC® Ice",
        description: "World Famous SONIC® Crushed Ice",
        price: 0.37,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/81f334d7-4d30-47b6-903b-98acd1cb5fb5-retina-large.jpeg"
      },
      {
        restaurantId: 6,
        item: "Original Cold Brew Iced Coffee",
        description: "SONIC’s smooth iced coffee poured over SONIC® ice and sweet cream.",
        price: 3.53,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=768,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/3a4abafd-56f9-44e5-b611-a8d1f629501e-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Original Cold Brew Iced Coffee",
        description: "SONIC’s smooth iced coffee poured over SONIC® ice and sweet cream.",
        price: 1.45,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/3a4abafd-56f9-44e5-b611-a8d1f629501e-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "French Vanilla Cold Brew Iced Coffee",
        description: "SONIC’s smooth iced coffee poured over SONIC® ice, vanilla flavor and sweet cream.",
        price: 3.89,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/34462add-20b0-425b-bf0b-90fa7c62ad67-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Twisted Lime Recharger",
        description: "The bold and tangy flavor of lime in a fizzy drink infused with the energy of red bull®",
        price: 4.87,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/eef67f52-d8ca-4b9b-aebb-13a0630a8dbd-retina-large.png"
      },
      {
        restaurantId: 6,
        item: "Limeades and Lemonades",
        description: "Tangy and sweet limeade with your choice of some favorite SONIC® flavors – all made with fresh fruit and all signature to Sonic.",
        price: 1.82,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/348fb2b3-6254-4fa6-a236-bd9384545a3d-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Green Mountain Coffee Roasters® Coffee",
        description: "Green Mountain Coffee Roasters® Coffee is now available at SONIC, made exclusively from 100 percent Arabica beans and brewed to perfection.",
        price: 2.43,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/a297c95e-a4bf-489e-b80d-9fbbb27c83cd-retina-large.jpg"
      },
      {
        restaurantId: 6,
        item: "Minute Maid® 100% Apple Juice Box",
        description: "Get the best of both worlds with MINUTE MAID® 100% Apple Juice. It's good and good for you.",
        price: 1.82,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/83221edc-7c9a-4f13-811d-01dac7ba1916-retina-large.jpeg"
      },
      {
        restaurantId: 6,
        item: "Milk Jug (1%) - White",
        description: "It's good. Good for you. And tastes like milk. What's not to love? Ultra-Pasteurized and the perfect cold and creamy addition to any Combo or Wacky Pack® meal. 8 FL OZ (236 mL)",
        price: 2.06,
        category: "Ultimate Drink Stop",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/8573225f-8613-487b-bc21-2a9eab3559a6-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Traditional Wings",
        description: "AWARD-WINNING & AUTHENTIC BUFFALO, NEW YORK-STYLE WINGS. FREE DIP AND VEGGIES WITH EVERY WINGS PURCHASE",
        price: 12.49,
        category: "Wings & Tenders",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/0ae15549-4f56-4f81-86ac-88106823135c-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Boneless Wings",
        description: "JUICY ALL-WHITE CHICKEN, LIGHTLY BREADED AND PERFECTLY CRISPY. FREE DIP AND VEGGIES WITH EVERY WINGS PURCHASE",
        price: 11.29,
        category: "Wings & Tenders",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/7deddbfc-c14a-44d0-a7cf-fb5095ba9ce3-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Hand-Breaded Tenders",
        description: "HAND-BREADED CHICKEN TENDERS / CHOICE OF SAUCE OR DRY SEASONING / NATURAL-CUT FRENCH FRIES",
        price: 13.79,
        category: "Wings & Tenders",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/2b81c90b-a153-4438-a386-586ec50cb555-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Traditional & Boneless Combo",
        description: "6 TRADITIONAL WINGS / 6 BONELESS WINGS / NATURAL CUT FRENCH FRIES / SLAW",
        price: 27.79,
        category: "Wings & Tenders",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/c9ba0075-5ec6-4111-91ba-cd3c28a030d3-retina-large.jpg"
      },
      {
        restaurantId: 3,
        item: "Cauliflower Wings",
        description: "BREADED CAULIFLOWER / HANDSPUN IN YOUR FAVORITE SAUCE OR DRY SEASONING / GREEN ONIONS FREE DIP AND VEGGIES WITH EVERY WINGS PURCHASE",
        price: 13.79,
        category: "Wings & Tenders",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/03566d4e-1824-431f-8e5d-bd63de5e0b43-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Naked Tenders®",
        description: "CHICKEN TENDERS / GRILLED / CHOICE OF SAUCE OR SEASONING / NATURAL-CUT FRENCH FRIES",
        price: 13.79,
        category: "Wings & Tenders",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/9cf92f9b-eb9a-4e89-8c30-a7ac7fde5e85-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Fried Pickles",
        description: "BREADED DILL PICKLES / SOUTHWESTERN RANCH",
        price: 10.79,
        category: "Appetizers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/deca501f-9b59-4d72-9913-73729a842132-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Large Cheddar Cheese Curds",
        description: "WISCONSIN WHITE CHEDDAR CHEESE CURDS / BATTERED / SOUTHWESTERN RANCH",
        price: 12.49,
        category: "Appetizers, Sides",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/3f2a8ad9-5eb3-4c9b-a1c3-370c038ce39d-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Regular Cheddar Cheese Curds",
        description: "WISCONSIN WHITE CHEDDAR CHEESE CURDS / BATTERED / SOUTHWESTERN RANCH",
        price: 7.29,
        category: "Appetizers, Sides",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/3f2a8ad9-5eb3-4c9b-a1c3-370c038ce39d-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Mozzarella Sticks",
        description: "MOZZARELLA / SEASONED PANKO BREADING / MARINARA",
        price: 10.79,
        category: "Appetizers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/859e8b79-0360-4dc1-ba9c-7f56cb451c07-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Dirty Dubs Tots",
        description: "TOTS / SMOKED PULLED BRISKET / GRILLED ONIONS / HATCH QUESO / SWEET BBQ / PICKLED HOT PEPPERS / GREEN ONIONS / COTIJA CHEESE",
        price: 14.79,
        category: "Appetizers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/1cdd15f9-2d5a-495c-ac1d-f4102a45161f-retina-large.jpg"
      },
      {
        restaurantId: 3,
        item: "Hatch Queso",
        description: "MELTED WHITE CHEDDAR / YOUNG GUNS HATCH CHILES / HOUSE-MADE PICO DE GALLO / HOUSE-MADE TORTILLA CHIPS",
        price: 9.99,
        category: "Appetizers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=768,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/5abfea1b-baec-42fc-80c9-ab6e50c316fe-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Ultimate Nachos",
        description: "DOUBLE-LAYERED / HOUSE-MADE TORTILLA CHIPS / HATCH QUESO / CHEDDAR-JACK CHEESE / HOUSE-MADE PICO DE GALLO / PICKLED HOT PEPPERS / CREMA / CILANTRO / SALSA",
        price: 12.49,
        category: "Appetizers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/9cdb220e-c86a-4b88-bcec-01c689033f56-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "House Sampler",
        description: "ULTIMATE NACHOS / BEER-BATTERED ONION RINGS / MOZZARELLA STICKS / BONELESS WINGS / CHOICE OF SAUCE OR DRY SEASONING / MARINARA / SOUTHWEST RANCH / CHOICE OF BLEU CHEESE OR RANCH DRESSING",
        price: 18.79,
        category: "Appetizers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1366,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/b3487cac-8c1d-4672-9e49-53ff6f3dc3f5-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Regular Cheddar Cheese Curds",
        description: "Regular Cheddar Cheese Curds",
        price: 7.29,
        category: "Appetizers, Sides",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/3f2a8ad9-5eb3-4c9b-a1c3-370c038ce39d-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Asian Zing Cauliflower Wings",
        description: "BREADED CAULIFLOWER / ASIAN ZING® / EVERYTHING SEASONING / PICKLED HOT PEPPERS / GREEN ONIONS / RANCH",
        price: 13.79,
        category: "Appetizers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=640,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/f68010aa-4c3c-43c9-ad14-a54c3739581a-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Basket Tater Tots",
        description: "CRISPY GOLDEN BROWN TATER TOTS",
        price: 7.29,
        category: "Appetizers, Sides",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=460,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/7ab4e1e0-5032-4bcb-b9e4-739b91886339-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Large French Fries",
        description: "NATURAL-CUT FRIES / SEA SALT / COARSE PEPPER",
        price: 7.29,
        category: "Appetizers, Sides",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=640,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/a30e7dd3-e848-4076-a814-0f05c86873d9-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Large Potato Wedges",
        description: "THICK-CUT POTATO WEDGES / SOUR CREAM-CHIVE SEASONED",
        price: 7.29,
        category: "Appetizers, Sides",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/5d263bf2-68cd-47c5-a604-897daffd3194-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Buffalo Chicken Tots",
        description: "TOTS / PULLED CHICKEN / BUFFALO SEASONING / BLEU CHEESE CRUMBLES / PICKLED HOT PEPPERS / MEDIUM BUFFALO SAUCE / RANCH / GREEN ONIONS",
        price: 14.79,
        category: "Appetizers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/1b472dab-14cf-4aaa-b111-0c82cdb9a2bd-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Chips & Dip Trio",
        description: "HATCH QUESO / HOUSE-MADE GUACAMOLE / SALSA / HOUSE-MADE PICO DE GALLO / HOUSE-MADE TORTILLA CHIPS",
        price: 13.79,
        category: "Appetizers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/115a7030-ab12-42d0-8e52-2d6eeeecbaab-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Regular French Fries",
        description: "NATURAL-CUT FRIES / SEA SALT / COARSE PEPPER",
        price: 4.79,
        category: "Appetizers, Sides",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=640,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/a30e7dd3-e848-4076-a814-0f05c86873d9-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Regular Tater Tots",
        description: "CRISPY GOLDEN BROWN TATER TOTS",
        price: 5.29,
        category: "Appetizers, Sides",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=460,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/7ab4e1e0-5032-4bcb-b9e4-739b91886339-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Chips & House-made Guacamole",
        description: "HASS AVOCADO / TOMATO / JALAPEÑO / ONION / CILANTRO / FRESH LIME / HOUSE-MADE TORTILLA CHIPS",
        price: 9.99,
        category: "Appetizers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/78329d63-c217-4c16-a2e2-89b098e9f513-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Large Beer-Battered Onion Rings",
        description: "THICK-CUT ONION RINGS / BEER BATTER / SOUTHWESTERN RANCH",
        price: 10.79,
        category: "Appetizers, Sides",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/8dc2c02f-ef3c-4ca7-bd74-cdf499b86dd9-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Regular Beer-Battered Onion Rings",
        description: "THICK-CUT ONION RINGS / BEER BATTER / SOUTHWESTERN RANCH",
        price: 7.29,
        category: "Appetizers, Sides",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/8dc2c02f-ef3c-4ca7-bd74-cdf499b86dd9-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "All-American Cheeseburger",
        description: "HAND-SMASHED DOUBLE PATTY / AMERICAN CHEESE / SHREDDED ICEBERG / TOMATO / PICKLES / MUSTARD / MAYO / CHALLAH BUN / GRILLED ONION UPON REQUEST",
        price: 13.99,
        category: "Burgers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=768,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/cf2e9a0c-44d4-4e49-9723-067a90ecb3b8-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Triple Bacon Cheeseburger",
        description: "HAND-SMASHED DOUBLE PATTY SEARED WITH BACON / AMERICAN CHEESE / THICK-CUT BACON / SHREDDED ICEBERG / TOMATO / PICKLES / BACON AIOLI / CHALLAH BUN",
        price: 17.79,
        category: "Burgers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/cabe0dbb-c57e-4b81-ab4f-9127fb0145ee-retina-large.jpg"
      },
      {
        restaurantId: 3,
        item: "Cheese Curd Bacon Burger",
        description: "HAND-SMASHED DOUBLE PATTY / AMERICAN CHEESE / WISCONSIN WHITE CHEDDAR CHEESE CURDS / THICK-CUT BACON / SHREDDED ICEBERG / TOMATO / ONION / PICKLES / MAYO / CHIPOTLE BBQ DRY RUB / CHALLAH BUN",
        price: 17.79,
        category: "Burgers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/8c4de955-36f2-40e2-a3e1-1a3a3da8aa36-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Bacon Smashed Hatch Chile Burger",
        description: "HAND-SMASHED DOUBLE PATTY SEARED WITH BACON / AMERICAN CHEESE / YOUNG GUNS HATCH CHILES / GRILLED ONIONS / PICKLED HOT PEPPERS / HATCH CHILE AIOLI / CHALLAH BUN",
        price: 17.79,
        category: "Burgers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/54c501ef-b183-4eef-950a-8c24397e9708-retina-large.png"
      },
      {
        restaurantId: 3,
        item: "Southwestern Black Bean Burger",
        description: "BLACK BEAN PATTY / CHEDDAR CHEESE / HOUSE-MADE GUACAMOLE / SHREDDED ICEBERG LETTUCE / TOMATO / ONION / PICKLES / SOUTHWESTERN RANCH / CHALLAH BUN / NATURAL-CUT FRENCH FRIES",
        price: 15.29,
        category: "Burgers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/9f4af3da-cbfa-4bcf-892b-19695e7f506c-retina-large.jpg"
      },
      {
        restaurantId: 3,
        item: "Mushroom Swiss Burger",
        description: "HAND-SMASHED DOUBLE PATTY / SWISS CHEESE / PARMESAN GARLIC SAUCE / SAUTÉED MUSHROOMS / GRILLED ONIONS / MAYO / HONEY MUSTARD / CHALLAH BUN",
        price: 15.99,
        category: "Burgers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/4ae9d1dc-8aac-4678-8804-f56f40991ed5-retina-large.jpg"
      },
      {
        restaurantId: 3,
        item: "Smoked Brisket Burger",
        description: "DOUBLE PATTY / HAND-SMASHED / AMERICAN CHEESE / SMOKED PULLED BRISKET / SWEET BBQ / GRILLED ONIONS / PICKLES / BACON AIOLI / CHALLAH BUN / NATURAL-CUT FRENCH FRIES",
        price: 18.79,
        category: "Burgers",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/e59d7fc6-892a-4731-98f6-6a1a44317db2-retina-large.png"
      },
      {
        restaurantId: 10,
        item: "Country Vegetable Plate",
        description: "Choice of four Country Sides. Served with Buttermilk Biscuits or Corn Muffins.",
        price: 12.99,
        cals: "160 - 2480 cal",
        category: "Sides n' Barrel Bites",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/6a2b370d-cda4-4aee-a4ea-2adce9244724-retina-large.jpg"
      },
      {
        restaurantId: 10,
        item: "Barrel Bite Duo",
        description: "For a limited time, satisfy your cravings with two of your favorite Barrel Bites for one great price.",
        price: 11.69,
        category: "Sides n' Barrel Bites",
        cals: "2070 cal",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/d0f55ffc-52e0-45f8-b423-e6ae5e5553a3-retina-large.jpg"
      },
      {
        restaurantId: 10,
        item: "Hashbrown Casserole",
        description: "Shredded potatoes, Colby cheese, chopped onions, our signature seasoning blend, salt and pepper baked together in the oven for our Signature Hashbrown Casserole.",
        price: 12.99,
        category: "Sides n' Barrel Bites",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/539c0cc9-4559-4905-bf59-099461dff79d-cb3888ac-0009-4da9-b20a-3d864ee8672a-retina-large.JPG"
      },
      {
        restaurantId: 10,
        item: "Buttermilk Biscuits (4)",
        description: "Four hand-rolled Buttermilk Biscuits.",
        price: 3.89,
        cals: "640 cal",
        category: "Sides n' Barrel Bites",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/03ad8cd2-1f45-495f-a1e5-405b5f902ef1-43ac6c22-fe84-4df6-935f-3b39e00ed42e-retina-large.JPG"
      },
      {
        restaurantId: 10,
        item: "The Barrel Cheeseburger*",
        description: "Our juicy grilled to order patty is seasoned and seared on our flat top grill, topped with melted Colby Cheese, mayonnaise, lettuce, tomato and thick-sliced Bacon stacked on a bun. Made to order and your choice of a Cup of Soup or any Country Side. We suggest enjoying it with Steak Fries.",
        price: 14.94,
        cals: "990 cal",
        category: "Burgers, Salads, n' More",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/492ddb4c-c29d-4236-bf94-f8dd8d7c6eb6-retina-large.jpg"
      },
      {
        restaurantId: 10,
        item: "Homestyle Fried Chicken Salad",
        description: "Crispy, golden-fried Sunday Homestyle Chicken® over fresh greens with boiled egg, grape tomatoes, cucumbers, croutons and Colby cheese plus crackers.",
        price: 8.50,
        cals: "850 cal",
        category: "Burgers, Salads, n' More",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/3fe8ab30-8e5e-4129-8654-2be62ae8fc82-retina-large.jpg"
      },
      {
        restaurantId: 10,
        item: "Homestyle Grilled Chicken Salad",
        description: "Smoky Southern grilled chicken breast over fresh greens with boiled egg, grape tomatoes, cucumbers, croutons and Colby cheese plus crackers.",
        price: 12.99,
        cals: "470 cal",
        category: "Burgers, Salads, n' More",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/a4b99395-e5bc-4dbf-a1f3-82004104ccd3-retina-large.jpg"
      },
      {
        restaurantId: 10,
        item: "Vegetable Soup Bowl",
        cals: "160 cal",
        description: "Enjoy a bowl of our Vegetable Soup.",
        price: 6.75,
        category: "Burgers, Salads, n' More",
        imgUrl: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/737e9e48-365a-406f-b6d0-d048afdc4472-retina-large.jpg"
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'MenuItems';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, null, {})
  }
};
