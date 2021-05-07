'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Agendas', {
      id: {
        allowNull: false,
        autoIncrement: false,
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
      idProfessor: {
        field: "idProfessor",
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "Professors",
          key:"id"
        }
      },
      descricao: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      dataAula: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Agendas');
  }
};