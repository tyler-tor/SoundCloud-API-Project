// EVERY seeder file
'use strict';

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code
const  bcrypt  = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Users';
     await queryInterface.bulkInsert(options, [
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
    options.tableName = 'Users';
     await queryInterface.bulkDelete(options, null, {});
  }
};
