'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('materiaProfs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      idMateria: {
        field: "idMateria",
        allowNull:false,
        type: Sequelize.STRING,
        references:{
      model: "Materia",
          key:"id",
        }
      },
      idProfessor: {
        field: "idProfessor",
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model:"Professors",
          key:"id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('materiaProfs');
  }
};