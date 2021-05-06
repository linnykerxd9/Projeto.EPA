'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedidoDoacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pedidoDoacao.init({
    idAluno: DataTypes.STRING,
    idDoacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pedidoDoacao',
  });
  return pedidoDoacao;
};