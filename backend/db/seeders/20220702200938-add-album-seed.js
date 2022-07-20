'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Albums', [
      {
       title: 'album1',
       description: 'this is a description for album 1',
       previewImage: 'album1.com',
       userId: 1
     },
      {
       title: 'album2',
       description: 'this is a description for album 2',
       previewImage: 'album2.com',
       userId: 2
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Albums', null, {});
  }
};
