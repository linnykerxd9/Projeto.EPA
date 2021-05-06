'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pagamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pagamento.init({
    valor: DataTypes.INTEGER,
    metodoPagamento: DataTypes.STRING,
    contaBancoReceber: DataTypes.STRING,
    contaBancoPagador: DataTypes.STRING,
    idStatus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pagamento',
  });
  return Pagamento;
};