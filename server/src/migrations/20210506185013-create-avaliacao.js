'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Avaliacaos', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      idAula: {
        field:"idAula",
        allowNull:false,
        type: Sequelize.STRING,
        refecences: {
          model: "Aulas",
          key:"id"
        }
      },
      idAluno: {
        field:"idAluno",
        allowNull:false,
        type: Sequelize.STRING,
        refecences: {
          model: "Alunos",
          key:"id"
        }
      },
      idProfessor: {
        field: "idProfessor",
        allowNull:false,
        type: Sequelize.STRING,
        references: {
          model: "Professors",
          key:"id"
        }
      },
      estrelas: {
        type: Sequelize.INTEGER
      },
      comentario: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Avaliacaos');
  }
};