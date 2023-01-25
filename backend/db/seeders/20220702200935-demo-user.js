'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
    {
      email: 'demo@user.io',
      username: 'Demo-lition',
      hashedPassword: bcrypt.hashSync('password'),
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/propic-6.jpg'
    },
    {
      email: 'user1@user.io',
      username: 'FakeUser1',
      hashedPassword: bcrypt.hashSync('password2'),
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/1674670916129.jpg'
    },
    {
      email: 'user2@user.io',
      username: 'FakeUser2',
      hashedPassword: bcrypt.hashSync('password3'),
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/1674669208418.jpg'
    }
   ], {})
  },

  down: async (queryInterface, Sequelize) => {

    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2']}
    }, {})
  }
};
