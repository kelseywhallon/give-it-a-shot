"use strict";
const imageData = require("./images");

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

    const imageArray = imageData.base64images;
    console.log(imageArray);
    for (const imageObject of imageArray) {
      imageObject.createdAt = new Date();
      imageObject.updatedAt = new Date();
      imageObject.image = Buffer.from(imageObject.image, "base64");
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
