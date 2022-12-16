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
    options.tableName = 'Comments';
    await queryInterface.bulkInsert(options, [
      {
        body: 'This is a comment for song 1',
        songId: 1,
        userId: 1
      },
      {
        body: 'This is a comment for song 2',
        songId: 2,
        userId: 2
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Comments';
    await queryInterface.bulkDelete(options, null, {});
  }
};
