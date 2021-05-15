'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Professors', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      nome_completo: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      dataNascimento: {
        type: Sequelize.DATE
      },
      sexo:{
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      rua: {
        type: Sequelize.STRING
      },
      contaBanco: {
        type: Sequelize.STRING
      },
      senha: {
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
    await queryInterface.dropTable('Professors');
  }
};