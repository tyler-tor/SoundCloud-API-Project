'use strict';
const  bcrypt  = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [
      {
       firstName: 'John',
       lastName: 'Smith',
       email: 'john.smith@gmail.com',
       username: 'JohnSmith',
       hashedPassword: bcrypt.hashSync('JohnsPassword')
     },
      {
       firstName: 'Jane',
       lastName: 'Doe',
       email: 'jane.doe@gmail.com',
       username: 'JaneDoe',
       hashedPassword: bcrypt.hashSync('JanesPassword')
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
