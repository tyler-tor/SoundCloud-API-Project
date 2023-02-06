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

    options.tableName = 'Songs';
    await queryInterface.bulkInsert(options, [
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
     },
     {
      title: 'Yesterday',
      description: 'A song about the past.',
      url: 'audio url',
      previewImage: 'image url',
      albumId: 1,
      userId: 4
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
     options.tableName = 'Songs';
     await queryInterface.bulkDelete(options, null, {});
  }
};

