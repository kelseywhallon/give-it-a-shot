"use strict";
const data = require("../data");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkDelete("images", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });

    const imageArray = data.images.databaseImages;
    console.log(imageArray);
    for (const imageObject of imageArray) {
      imageObject.createdAt = new Date();
      imageObject.updatedAt = new Date();
    }

    const insertedImages = await queryInterface.bulkInsert(
      "images",
      imageArray,
      { returning: true }
    );
    console.log("bulk insert: ", insertedImages);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
