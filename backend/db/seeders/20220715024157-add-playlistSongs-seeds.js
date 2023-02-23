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
       songId: 14,
       playlistId: 1
     },
      {
       songId: 15,
       playlistId: 1
     },
      {
       songId: 26,
       playlistId: 1
     },
      {
       songId: 27,
       playlistId: 1
     },
      {
       songId: 39,
       playlistId: 1
     },
      {
       songId: 40,
       playlistId: 1
     },
      {
       songId: 54,
       playlistId: 1
     },
      {
       songId: 55,
       playlistId: 1
     },
      {
       songId: 72,
       playlistId: 1
     },
      {
       songId: 73,
       playlistId: 2
     },
      {
       songId: 74,
       playlistId: 2
     },
      {
       songId: 86,
       playlistId: 2
     },
      {
       songId: 87,
       playlistId: 2
     },
      {
       songId: 3,
       playlistId: 2
     },
      {
       songId: 4,
       playlistId: 2
     },
      {
       songId: 16,
       playlistId: 2
     },
      {
       songId: 17,
       playlistId: 2
     },
      {
       songId: 28,
       playlistId: 2
     },
      {
       songId: 29,
       playlistId: 2
     },
      {
       songId: 41,
       playlistId: 3
     },
      {
       songId: 42,
       playlistId: 3
     },
      {
       songId: 56,
       playlistId: 3
     },
      {
       songId: 57,
       playlistId: 3
     },
      {
       songId: 75,
       playlistId: 3
     },
      {
       songId: 76,
       playlistId: 3
     },
      {
       songId: 88,
       playlistId: 3
     },
      {
       songId: 89,
       playlistId: 3
     },
      {
       songId: 5,
       playlistId: 3
     },
      {
       songId: 6,
       playlistId: 3
     },
      {
       songId: 18,
       playlistId: 4
     },
      {
       songId: 19,
       playlistId: 4
     },
      {
       songId: 31,
       playlistId: 4
     },
      {
       songId: 32,
       playlistId: 4
     },
      {
       songId: 43,
       playlistId: 4
     },
      {
       songId: 44,
       playlistId: 4
     },
      {
       songId: 58,
       playlistId: 4
     },
      {
       songId: 59,
       playlistId: 4
     },
      {
       songId: 77,
       playlistId: 4
     },
      {
       songId: 78,
       playlistId: 4
     },
      {
       songId: 90,
       playlistId: 5
     },
      {
       songId: 91,
       playlistId: 5
     },
      {
       songId: 7,
       playlistId: 5
     },
      {
       songId: 8,
       playlistId: 5
     },
      {
       songId: 20,
       playlistId: 5
     },
      {
       songId: 21,
       playlistId: 5
     },
      {
       songId: 30,
       playlistId: 5
     },
      {
       songId: 33,
       playlistId: 5
     },
      {
       songId: 45,
       playlistId: 5
     },
      {
       songId: 46,
       playlistId: 5
     },
      {
       songId: 60,
       playlistId: 6
     },
      {
       songId: 61,
       playlistId: 6
     },
      {
       songId: 79,
       playlistId: 6
     },
      {
       songId: 80,
       playlistId: 6
     },
      {
       songId: 92,
       playlistId: 6
     },
      {
       songId: 93,
       playlistId: 6
     },
      {
       songId: 9,
       playlistId: 6
     },
      {
       songId: 10,
       playlistId: 6
     },
      {
       songId: 22,
       playlistId: 6
     },
      {
       songId: 23,
       playlistId: 6
     },
      {
       songId: 34,
       playlistId: 7
     },
      {
       songId: 35,
       playlistId: 7
     },
      {
       songId: 47,
       playlistId: 7
     },
      {
       songId: 48,
       playlistId: 7
     },
      {
       songId: 62,
       playlistId: 7
     },
      {
       songId: 63,
       playlistId: 7
     },
      {
       songId: 81,
       playlistId: 7
     },
      {
       songId: 82,
       playlistId: 7
     },
      {
       songId: 94,
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
