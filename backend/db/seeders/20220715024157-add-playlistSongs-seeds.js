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
    options.tableName = 'PlaylistSongs';
     await queryInterface.bulkInsert(options, [
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
    options.tableName = 'PlaylistSongs';
     await queryInterface.bulkDelete(options, null, {});
  }
};
