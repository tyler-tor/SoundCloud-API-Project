const bcrypt = require('bcryptjs');
// EVERY seeder file
'use strict';

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    await queryInterface.bulkInsert(options, [
    {
      email: 'demo@user.io',
      username: 'Demo-lition',
      hashedPassword: bcrypt.hashSync('password'),
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/propic-4.jpg',
      id: 1
    },
    {
      email: 'loslonleyboys@user.io',
      username: 'Los Lonley Boys',
      hashedPassword: bcrypt.hashSync('password2'),
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/propic-7.jpg',
      id: 2
    },
    {
      email: 'macmiller@user.io',
      username: 'Mac Miller',
      hashedPassword: bcrypt.hashSync('password3'),
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/propic-8.jpg',
      id: 3
    },
    {
      email: 'leonbridges@user.io',
      username: 'Leon Bridges',
      hashedPassword: bcrypt.hashSync('password3'),
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/propic-5.jpg',
      id: 4
    },
    {
      email: 'kidcudi@user.io',
      username: 'Kid Cudi',
      hashedPassword: bcrypt.hashSync('password3'),
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/propic-6.jpg',
      id: 5
    }

   ], {})
  },

  down: async (queryInterface, Sequelize) => {

    const Op = Sequelize.Op;
    options.tableName = 'Users';
    await queryInterface.bulkDelete(options, null, {})
  }
};
