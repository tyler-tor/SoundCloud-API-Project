// EVERY seeder file
'use strict';

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Albums';
     await queryInterface.bulkInsert(options, [
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
    options.tableName = 'Albums';
     await queryInterface.bulkDelete(options, null, {});
  }
};
