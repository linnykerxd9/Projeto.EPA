'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pedidoDoacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      idAluno: {
        field: "idAluno",
        allowNull:false,
        type: Sequelize.STRING,
        references: {
          model: "Alunos",
          key:"id"
        }
      },
      idDoacao: {
        field:"idDoacao",
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "Doacaos",
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
    await queryInterface.dropTable('pedidoDoacaos');
  }
};