'use strict';

const { ItemSelection, ItemOption } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await ItemSelection.bulkCreate([
      {
        optionId: 1,
        selection: "Tangy BBQ Dipping Sauce",
        cals: "45 cal",
      },
      {
        optionId: 1,
        selection: "Sweet N Sour Dipping Sauce",
        cals: "50 cal",
      },
      {
        optionId: 1,
        selection: "Honey Packet",
        cals: "50 cal",
      },
      {
        optionId: 1,
        selection: "Hot Musturd Dipping Sauce",
        cals: "45 cal",
      },
      {
        optionId: 1,
        selection: "Creamy Ranch Sauce",
        cals: "105 cal",
      },
      {
        optionId: 1,
        selection: "Hot Pincate Salsa",
        cals: "5 cal",
      },
      {
        optionId: 1,
        selection: "Mild Pincate Salsa",
        cals: "5 cal",
      },
      {
        optionId: 1,
        selection: "Ketchup Packet",
        cals: "10 cal",
      },
      {
        optionId: 1,
        selection: "Honey Musturd",
        cals: "60 cal",
      },
      {
        optionId: 1,
        selection: "Spicy Buffalo Sauce",
        cals: "30 cal",
      },
      {
        optionId: 1,
        selection: "No Sauce",
      },

      {
        optionId: 2,
        selection: "Tangy BBQ Dipping Sauce",
        cals: "45 cal",
      },
      {
        optionId: 2,
        selection: "Sweet N Sour Dipping Sauce",
        cals: "50 cal",
      },
      {
        optionId: 2,
        selection: "Honey Packet",
        cals: "50 cal",
      },
      {
        optionId: 2,
        selection: "Hot Musturd Dipping Sauce",
        cals: "45 cal",
      },
      {
        optionId: 2,
        selection: "Creamy Ranch Sauce",
        cals: "105 cal",
      },
      {
        optionId: 2,
        selection: "Hot Pincate Salsa",
        cals: "5 cal",
      },
      {
        optionId: 2,
        selection: "Mild Pincate Salsa",
        cals: "5 cal",
      },
      {
        optionId: 2,
        selection: "Ketchup Packet",
        cals: "10 cal",
      },
      {
        optionId: 2,
        selection: "Honey Musturd",
        cals: "60 cal",
      },
      {
        optionId: 2,
        selection: "Spicy Buffalo Sauce",
        cals: "30 cal",
      },
      {
        optionId: 2,
        selection: "No Sauce",
      },
      {
        optionId: 2,
        selection: "Mild Pincate Salsa",
        cals: "5 cal",
      },
      {
        optionId: 3,
        selection: "Cherry Limeade Slush",
        price: 2.67,
      },
      {
        optionId: 3,
        selection: "Lemonade Slush",
        price: 2.67,
      },
      {
        optionId: 3,
        selection: "Limeade Slush",
        price: 2.67,
      },
      {
        optionId: 3,
        selection: "Strawberry Real Fruit Slush",
        price: 1.57,
      },
      {
        optionId: 4,
        selection: "American",
      },
      {
        optionId: 4,
        selection: "Cheddar",
      },
      {
        optionId: 4,
        selection: "Swiss",
      },
      {
        optionId: 4,
        selection: "Pepper Jack",
      },
      {
        optionId: 4,
        selection: "No Cheese",
      },
      {
        optionId: 5,
        selection: "American",
      },
      {
        optionId: 5,
        selection: "Cheddar",
      },
      {
        optionId: 5,
        selection: "Swiss",
      },
      {
        optionId: 5,
        selection: "Pepper Jack",
      },
      {
        optionId: 5,
        selection: "No Cheese",
      },
      {
        optionId: 6,
        selection: "American",
      },
      {
        optionId: 6,
        selection: "Cheddar",
      },
      {
        optionId: 6,
        selection: "Swiss",
      },
      {
        optionId: 6,
        selection: "Pepper Jack",
      },
      {
        optionId: 6,
        selection: "No Cheese",
      },
      {
        optionId: 7,
        selection: "American",
      },
      {
        optionId: 7,
        selection: "Cheddar",
      },
      {
        optionId: 7,
        selection: "Swiss",
      },
      {
        optionId: 7,
        selection: "Pepper Jack",
      },
      {
        optionId: 7,
        selection: "No Cheese",
      },
      {
        optionId: 8,
        selection: "American",
      },
      {
        optionId: 8,
        selection: "Cheddar",
      },
      {
        optionId: 8,
        selection: "Swiss",
      },
      {
        optionId: 8,
        selection: "Pepper Jack",
      },
      {
        optionId: 8,
        selection: "No Cheese",
      },
      {
        optionId: 9,
        selection: "American",
      },
      {
        optionId: 9,
        selection: "Cheddar",
      },
      {
        optionId: 9,
        selection: "Swiss",
      },
      {
        optionId: 9,
        selection: "Pepper Jack",
      },
      {
        optionId: 9,
        selection: "No Cheese",
      },
      {
        optionId: 10,
        selection: "American",
      },
      {
        optionId: 10,
        selection: "Cheddar",
      },
      {
        optionId: 10,
        selection: "Swiss",
      },
      {
        optionId: 10,
        selection: "Pepper Jack",
      },
      {
        optionId: 10,
        selection: "No Cheese",
      },
      {
        optionId: 11,
        selection: "Grilled White Onions"
      },
      {
        optionId: 11,
        selection: "Lettuce",
        selected: true
      },
      {
        optionId: 11,
        selection: "Tomato",
        selected: true
      },
      {
        optionId: 11,
        selection: "Pickles",
        selected: true
      },
      {
        optionId: 11,
        selection: "Mayo",
        selected: true
      },
      {
        optionId: 11,
        selection: "Musturd",
        selected: true
      },
      {
        optionId: 12,
        selection: "Grilled White Onions"
      },
      {
        optionId: 12,
        selection: "Lettuce",
        selected: true
      },
      {
        optionId: 12,
        selection: "Tomato",
        selected: true
      },
      {
        optionId: 12,
        selection: "Pickles",
        selected: true
      },
      {
        optionId: 12,
        selection: "Mayo",
        selected: true
      },
      {
        optionId: 12,
        selection: "Musturd",
        selected: true
      },
      {
        optionId: 13,
        selection: "Grilled White Onions"
      },
      {
        optionId: 13,
        selection: "Lettuce",
        selected: true
      },
      {
        optionId: 13,
        selection: "Tomato",
        selected: true
      },
      {
        optionId: 13,
        selection: "Pickles",
        selected: true
      },
      {
        optionId: 13,
        selection: "Mayo",
        selected: true
      },
      {
        optionId: 13,
        selection: "Musturd",
        selected: true
      },
      {
        optionId: 14,
        selection: "Grilled White Onions"
      },
      {
        optionId: 14,
        selection: "Lettuce",
        selected: true
      },
      {
        optionId: 14,
        selection: "Tomato",
        selected: true
      },
      {
        optionId: 14,
        selection: "Pickles",
        selected: true
      },
      {
        optionId: 14,
        selection: "Mayo",
        selected: true
      },
      {
        optionId: 14,
        selection: "Musturd",
        selected: true
      },
      {
        optionId: 15,
        selection: "Grilled White Onions"
      },
      {
        optionId: 15,
        selection: "Lettuce",
        selected: true
      },
      {
        optionId: 15,
        selection: "Tomato",
        selected: true
      },
      {
        optionId: 15,
        selection: "Pickles",
        selected: true
      },
      {
        optionId: 15,
        selection: "Mayo",
        selected: true
      },
      {
        optionId: 15,
        selection: "Musturd",
        selected: true
      },
      {
        optionId: 16,
        selection: "Grilled White Onions"
      },
      {
        optionId: 16,
        selection: "Lettuce",
        selected: true
      },
      {
        optionId: 16,
        selection: "Tomato",
        selected: true
      },
      {
        optionId: 16,
        selection: "Pickles",
        selected: true
      },
      {
        optionId: 16,
        selection: "Mayo",
        selected: true
      },
      {
        optionId: 16,
        selection: "Musturd",
        selected: true
      },
      {
        optionId: 17,
        selection: "Grilled White Onions"
      },
      {
        optionId: 17,
        selection: "Lettuce",
        selected: true
      },
      {
        optionId: 17,
        selection: "Tomato",
        selected: true
      },
      {
        optionId: 17,
        selection: "Pickles",
        selected: true
      },
      {
        optionId: 17,
        selection: "Mayo",
        selected: true
      },
      {
        optionId: 17,
        selection: "Musturd",
        selected: true
      },
    ], {});

    const idsToRetrieve = [18, 19, 20, 21, 22, 23, 24];

    const options = await ItemOption.findAll({
      where: {
      id: idsToRetrieve
      }
    });

    const fountain = options.flatMap(option => [
      {
        optionId: option.id,
        selection: "20oz Fountain Soda",
        price: 2.29
      },
    ]);

    const soda = options.flatMap(option => [
      {
        optionId: option.id,
        selection: "Bottled Soda",
      },
    ]);

    const bull = options.flatMap(option => [
      {
        optionId: option.id,
        selection: "Red Bull",
      },
    ]);

    const water = options.flatMap(option => [
      {
        optionId: option.id,
        selection: "bubly™ Lime Sparkling Water",
        price: 3.49
      },
    ]);

    const aqua = options.flatMap(option => [
      {
        optionId: option.id,
        selection: "Aquafina® Bottled Water",
        price: 2.29
      },
    ]);

    await ItemSelection.bulkCreate(fountain);
    await ItemSelection.bulkCreate(soda);
    await ItemSelection.bulkCreate(bull);
    await ItemSelection.bulkCreate(water);
    await ItemSelection.bulkCreate(aqua);



  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'ItemSelections';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, null, {})
  }
};
