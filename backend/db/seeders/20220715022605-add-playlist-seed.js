'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Playlists', [
      {
        name: 'Playlist 1',
        previewImage: 'playlist1.com',
        userId: 1
      },
      {
        name: 'Playlist 2',
        previewImage: 'playlist2.com',
        userId: 2
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Playlists', null, {});
  }
};
