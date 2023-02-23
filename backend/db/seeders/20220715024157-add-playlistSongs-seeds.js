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
       playlistId: 1
     },
      {
       songId: 2,
       playlistId: 1
     },
      {
       songId: 2,
       playlistId: 1
     },
      {
       songId: 2,
       playlistId: 1
     },
      {
       songId: 2,
       playlistId: 1
     },
      {
       songId: 2,
       playlistId: 1
     },
      {
       songId: 2,
       playlistId: 1
     },
      {
       songId: 2,
       playlistId: 1
     },
      {
       songId: 2,
       playlistId: 1
     },
      {
       songId: 2,
       playlistId: 1
     },
      {
       songId: 2,
       playlistId: 2
     },
      {
       songId: 2,
       playlistId: 2
     },
      {
       songId: 2,
       playlistId: 2
     },
      {
       songId: 2,
       playlistId: 2
     },
      {
       songId: 2,
       playlistId: 2
     },
      {
       songId: 2,
       playlistId: 2
     },
      {
       songId: 2,
       playlistId: 2
     },
      {
       songId: 2,
       playlistId: 2
     },
      {
       songId: 2,
       playlistId: 2
     },
      {
       songId: 2,
       playlistId: 2
     },
      {
       songId: 2,
       playlistId: 3
     },
      {
       songId: 2,
       playlistId: 3
     },
      {
       songId: 2,
       playlistId: 3
     },
      {
       songId: 2,
       playlistId: 3
     },
      {
       songId: 2,
       playlistId: 3
     },
      {
       songId: 2,
       playlistId: 3
     },
      {
       songId: 2,
       playlistId: 3
     },
      {
       songId: 2,
       playlistId: 3
     },
      {
       songId: 2,
       playlistId: 3
     },
      {
       songId: 2,
       playlistId: 3
     },
      {
       songId: 2,
       playlistId: 4
     },
      {
       songId: 2,
       playlistId: 4
     },
      {
       songId: 2,
       playlistId: 4
     },
      {
       songId: 2,
       playlistId: 4
     },
      {
       songId: 2,
       playlistId: 4
     },
      {
       songId: 2,
       playlistId: 4
     },
      {
       songId: 2,
       playlistId: 4
     },
      {
       songId: 2,
       playlistId: 4
     },
      {
       songId: 2,
       playlistId: 4
     },
      {
       songId: 2,
       playlistId: 4
     },
      {
       songId: 2,
       playlistId: 5
     },
      {
       songId: 2,
       playlistId: 5
     },
      {
       songId: 2,
       playlistId: 5
     },
      {
       songId: 2,
       playlistId: 5
     },
      {
       songId: 2,
       playlistId: 5
     },
      {
       songId: 2,
       playlistId: 5
     },
      {
       songId: 2,
       playlistId: 5
     },
      {
       songId: 2,
       playlistId: 5
     },
      {
       songId: 2,
       playlistId: 5
     },
      {
       songId: 2,
       playlistId: 5
     },
      {
       songId: 2,
       playlistId: 6
     },
      {
       songId: 2,
       playlistId: 6
     },
      {
       songId: 2,
       playlistId: 6
     },
      {
       songId: 2,
       playlistId: 6
     },
      {
       songId: 2,
       playlistId: 6
     },
      {
       songId: 2,
       playlistId: 6
     },
      {
       songId: 2,
       playlistId: 6
     },
      {
       songId: 2,
       playlistId: 6
     },
      {
       songId: 2,
       playlistId: 6
     },
      {
       songId: 2,
       playlistId: 6
     },
      {
       songId: 2,
       playlistId: 7
     },
      {
       songId: 2,
       playlistId: 7
     },
      {
       songId: 2,
       playlistId: 7
     },
      {
       songId: 2,
       playlistId: 7
     },
      {
       songId: 2,
       playlistId: 7
     },
      {
       songId: 2,
       playlistId: 7
     },
      {
       songId: 2,
       playlistId: 7
     },
      {
       songId: 2,
       playlistId: 7
     },
      {
       songId: 2,
       playlistId: 7
     },
      {
       songId: 2,
       playlistId: 7
     },
      {
       songId: 2,
       playlistId: 8
     },
      {
       songId: 2,
       playlistId: 8
     },
      {
       songId: 2,
       playlistId: 8
     },
      {
       songId: 2,
       playlistId: 8
     },
      {
       songId: 2,
       playlistId: 8
     },
      {
       songId: 2,
       playlistId: 8
     },
      {
       songId: 2,
       playlistId: 8
     },
      {
       songId: 2,
       playlistId: 8
     },
      {
       songId: 2,
       playlistId: 8
     },
      {
       songId: 2,
       playlistId: 8
     },
      {
       songId: 2,
       playlistId: 9
     },
      {
       songId: 2,
       playlistId: 9
     },
      {
       songId: 2,
       playlistId: 9
     },
      {
       songId: 2,
       playlistId: 9
     },
      {
       songId: 2,
       playlistId: 9
     },
      {
       songId: 2,
       playlistId: 9
     },
      {
       songId: 2,
       playlistId: 9
     },
      {
       songId: 2,
       playlistId: 9
     },
      {
       songId: 2,
       playlistId: 9
     },
      {
       songId: 2,
       playlistId: 9
     },
      {
       songId: 2,
       playlistId: 10
     },
      {
       songId: 2,
       playlistId: 10
     },
      {
       songId: 2,
       playlistId: 10
     },
      {
       songId: 2,
       playlistId: 10
     },
      {
       songId: 2,
       playlistId: 10
     },
      {
       songId: 2,
       playlistId: 10
     },
      {
       songId: 2,
       playlistId: 10
     },
      {
       songId: 2,
       playlistId: 10
     },
      {
       songId: 2,
       playlistId: 10
     },
      {
       songId: 2,
       playlistId: 10
     },
      {
       songId: 2,
       playlistId: 11
     },
      {
       songId: 2,
       playlistId: 11
     },
      {
       songId: 2,
       playlistId: 11
     },
      {
       songId: 2,
       playlistId: 11
     },
      {
       songId: 2,
       playlistId: 11
     },
      {
       songId: 2,
       playlistId: 11
     },
      {
       songId: 2,
       playlistId: 11
     },
      {
       songId: 2,
       playlistId: 11
     },
      {
       songId: 2,
       playlistId: 11
     },
      {
       songId: 2,
       playlistId: 11
     },
      {
       songId: 2,
       playlistId: 12
     },
      {
       songId: 2,
       playlistId: 12
     },
      {
       songId: 2,
       playlistId: 12
     },
      {
       songId: 2,
       playlistId: 12
     },
      {
       songId: 2,
       playlistId: 12
     },
      {
       songId: 2,
       playlistId: 12
     },
      {
       songId: 2,
       playlistId: 12
     },
      {
       songId: 2,
       playlistId: 12
     },
      {
       songId: 2,
       playlistId: 12
     },
      {
       songId: 2,
       playlistId: 12
     },
      {
       songId: 2,
       playlistId: 13
     },
      {
       songId: 2,
       playlistId: 13
     },
      {
       songId: 2,
       playlistId: 13
     },
      {
       songId: 2,
       playlistId: 13
     },
      {
       songId: 2,
       playlistId: 13
     },
      {
       songId: 2,
       playlistId: 13
     },
      {
       songId: 2,
       playlistId: 13
     },
      {
       songId: 2,
       playlistId: 13
     },
      {
       songId: 2,
       playlistId: 13
     },
      {
       songId: 2,
       playlistId: 13
     },
      {
       songId: 2,
       playlistId: 14
     },
      {
       songId: 2,
       playlistId: 14
     },
      {
       songId: 2,
       playlistId: 14
     },
      {
       songId: 2,
       playlistId: 14
     },
      {
       songId: 2,
       playlistId: 14
     },
      {
       songId: 2,
       playlistId: 14
     },
      {
       songId: 2,
       playlistId: 14
     },
      {
       songId: 2,
       playlistId: 14
     },
      {
       songId: 2,
       playlistId: 14
     },
      {
       songId: 2,
       playlistId: 14
     },
      {
       songId: 2,
       playlistId: 15
     },
      {
       songId: 2,
       playlistId: 15
     },
      {
       songId: 2,
       playlistId: 15
     },
      {
       songId: 2,
       playlistId: 15
     },
      {
       songId: 2,
       playlistId: 15
     },
      {
       songId: 2,
       playlistId: 15
     },
      {
       songId: 2,
       playlistId: 15
     },
      {
       songId: 2,
       playlistId: 15
     },
      {
       songId: 2,
       playlistId: 15
     },
      {
       songId: 2,
       playlistId: 15
     }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'PlaylistSongs';
     await queryInterface.bulkDelete(options, null, {});
  }
};
