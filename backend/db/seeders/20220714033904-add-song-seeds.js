'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Songs', [
      {
       title: 'song1',
       description: 'this is song1',
       url: 'soundcloud.com/songs/song1',
       previewImage: 'imageOfSong1.com',
       albumId: 1,
       userId: 1
     },
      {
       title: 'song2',
       description: 'this is song2',
       url: 'soundcloud.com/songs/song2',
       previewImage: 'imageOfSong2.com',
       albumId: 2,
       userId: 2
     }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Songs', null, {});
  }
};
