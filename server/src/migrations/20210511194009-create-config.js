'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Configs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      preProfessor: {
        type: Sequelize.STRING
      },
      preAluno: {
        type: Sequelize.STRING
      },
      preAula: {
        type: Sequelize.STRING
      },
      preAvaliacao: {
        type: Sequelize.STRING
      },
      preDoacao: {
        type: Sequelize.STRING
      },
      preLocalizacao: {
        type: Sequelize.STRING
      },
      preMateria: {
        type: Sequelize.STRING
      },
      preAgenda: {
        type: Sequelize.STRING
      },
      prePagamento: {
        type: Sequelize.STRING
      },
      preStatus: {
        type: Sequelize.STRING
      },
      preMateriaProf: {
        type: Sequelize.STRING
      },
      prePedidoDoacao: {
        type: Sequelize.STRING
      },
      ultimoIdProfessor: {
        type: Sequelize.INTEGER
      },
      ultimoIdAluno: {
        type: Sequelize.INTEGER
      },
      ultimoIdAula: {
        type: Sequelize.INTEGER
      },
      ultimoIdAvaliacao: {
        type: Sequelize.INTEGER
      },
      ultimoIdDoacao: {
        type: Sequelize.INTEGER
      },
      ultimoIdLocalizacao: {
        type: Sequelize.INTEGER
      },
      ultimoIdMateria: {
        type: Sequelize.INTEGER
      },
      ultimoIdAgenda: {
        type: Sequelize.INTEGER
      },
      ultimoIdPagamento: {
        type: Sequelize.INTEGER
      },
      ultimoIdStatus: {
        type: Sequelize.INTEGER
      },
      ultimoIdMateriaProf: {
        type: Sequelize.INTEGER
      },
      ultimoIdPedidoDoacao: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Configs');
  }
};