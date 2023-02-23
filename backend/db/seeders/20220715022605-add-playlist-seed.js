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
        name: 'Chill',
        previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/playlistimages/playlistimg2.jpg',
        userId: 1
      },
      {
        name: 'Summer Nights',
        previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/playlistimages/playlistimg12.jpg',
        userId: 1
      },
      {
        name: 'Plug Away',
        previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/playlistimages/playlistimg13.jpg',
        userId: 1
      },
      {
        name: 'Smile',
        previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/playlistimages/playlistimg14.jpg',
        userId: 2
      },
      {
        name: 'Drive',
        previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/playlistimages/playlistimg15.jpg',
        userId: 2
      },
      {
        name: 'Take A Hike',
        previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/playlistimages/playlistimg10.jpeg',
        userId: 2
      },
      {
        name: 'China Town',
        previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/playlistimages/playlistimg8.jpg',
        userId: 3
      },
      {
        name: 'Game Away',
        previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/playlistimages/playlistimg6.jpg',
        userId: 3
      },
      {
        name: 'Weekend Hangout',
        previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/playlistimages/playlistimg4.jpg',
        userId: 3
      },
      {
        name: 'Lonely Adventure',
        previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/playlistimages/playlistimg5.jpg',
        userId: 4
      },
      {
        name: 'Beach Vibes',
        previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/playlistimages/playlistimg7.jfif',
        userId: 4
      },
      {
        name: 'Deep Thoughts',
        previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/playlistimages/playlistimg3.jpg',
        userId: 4
      },
      {
        name: 'Study Away',
        previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/playlistimages/playlistimg1.jpg',
        userId: 5
      },
      {
        name: 'The Future',
        previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/playlistimages/playlistimg9.jpg',
        userId: 5
      },
      {
        name: 'Lunch Time',
        previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/playlistimages/playlistimg11.jpg',
        userId: 5
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Playlists';
    await queryInterface.bulkDelete(options, null, {});
  }
};
