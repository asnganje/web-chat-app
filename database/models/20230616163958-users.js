'use strict';
const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
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
      firstName: 'Abdul',
      lastName: 'Sunil',
      email: 'abd@gmail.com',
      password: bcrypt.hashSync('12345r', 10),
      gender: 'male'
    },

    {
      firstName: 'Sule',
      lastName: 'Sunil',
      email: 'sulesh@gmail.com',
      password: '123ds45r',
      gender: 'female'
    },

    {
      firstName: 'Naa',
      lastName: 'Abdala',
      email: 'naa@gmail.com',
      password: '1ew345r',
      gender: 'female'
    }
   ])
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
