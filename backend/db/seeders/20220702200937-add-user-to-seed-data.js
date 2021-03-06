'use strict';
const  bcrypt  = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
       firstName: 'John',
       lastName: 'Smith',
       email: 'john.smith@gmail.com',
       username: 'JohnSmith',
       hashedPassword: bcrypt.hashSync('JohnsPassword'),
       previewImage: 'imageurl'
     },
      {
       firstName: 'Jane',
       lastName: 'Doe',
       email: 'jane.doe@gmail.com',
       username: 'JaneDoe',
       hashedPassword: bcrypt.hashSync('JanesPassword'),
       previewImage: 'imageurl'
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
