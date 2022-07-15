'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('PlaylistSongs', [
      {
       songId: 1,
       playlistId: 1
     },
      {
       songId: 2,
       playlistId: 2
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('PlaylistSongs', null, {});
  }
};
