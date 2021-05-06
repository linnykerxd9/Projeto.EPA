'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Status.hasMany(models.pedidoDoacao, {
        foreignKey: "idDoacao",
        sourceKey:"id"
     })
    }
  };
  Doacao.init({
    idDoador: DataTypes.STRING,
    valor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doacao',
  });
  return Doacao;
};