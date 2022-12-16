// EVERY seeder file
'use strict';

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Playlists';
    await queryInterface.bulkInsert(options, [
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
    options.tableName = 'Playlists';
    await queryInterface.bulkDelete(options, null, {});
  }
};
