'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('ToDos',  [
     {
       task: "Baca Buku",
       deadline: "2020-09-16",
       isCompleted: false,
       completedAt: "2020-09-15",
       createdAt: new Date(),
       updatedAt: new Date()
     }], {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('ToDos', null, {})
  }
};
