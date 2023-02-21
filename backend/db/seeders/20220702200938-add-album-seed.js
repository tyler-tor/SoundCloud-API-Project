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
       title: 'Sacred',
       description: "Sacred is the Los Lonely Boys' fourth album and their second studio set, released on July 18, 2006.",
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Sacred.jpg',
       userId: 2,
       id: 1
     },
      {
       title: 'Hyrbrid Theory',
       description: 'Hybrid Theory is the debut studio album by American rock band Linkin Park, released on October 24, 2000',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/HyrbridTheory.jpg',
       userId: 1,
       id: 2
     },
      {
       title: 'Meteora',
       description: 'Meteora is the second studio album by American rock band Linkin Park. It was released on March 25, 2003',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin_Park_Meteora_Album_Cover.jpg',
       userId: 1,
       id: 3
     },
      {
       title: 'Coming Home',
       description: 'Coming Home is the debut studio album by American singer Leon Bridges. It was released on June 23',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Coming_Home_Leon_Bridges.jpg',
       userId: 4,
       id: 4
     },
      {
       title: 'K.I.D.S',
       description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
       userId: 3,
       id: 5
     },
      {
       title: 'Circles',
       description: 'Circles is the sixth and final studio album by American rapper and singer Mac Miller',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_-_Circles.jpg',
       userId: 3,
       id: 6
     },
      {
       title: 'Entergalactic',
       description: 'Entergalactic is the eighth studio album by American musician Kid Cudi. The album was issued on September 30, 2022',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Kid_Cudi_-_Entergalactic.jpg',
       userId: 5,
       id: 7
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Albums';
     await queryInterface.bulkDelete(options, null, {});
  }
};
