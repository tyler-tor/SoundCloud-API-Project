'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Comments', [
      {
        body: 'This is a comment for song 1',
        songId: 1
      },
      {
        body: 'This is a comment for song 2',
        songId: 2
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Comments', null, {});
  }
};
