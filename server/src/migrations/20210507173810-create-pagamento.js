'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pagamentos', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.INTEGER
      },
      metodoPagamento: {
        type: Sequelize.STRING
      },
      contaBancoReceber: {
        type: Sequelize.STRING
      },
      contaBancoPagador: {
        type: Sequelize.STRING
      },
      idAula: {
        field:"idAula",
        allowNull: false,
        type: Sequelize.STRING,
        references:{
          model:"Aulas",
          key:"id"
        }
      },
      idStatus: {
        field: "idStatus",
        allowNull:false,
        type: Sequelize.STRING,
        references: {
          model: "Statuses",
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
    await queryInterface.dropTable('Pagamentos');
  }
};