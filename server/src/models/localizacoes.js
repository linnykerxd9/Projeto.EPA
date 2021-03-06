'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Localizacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Localizacoes.belongsTo(models.Professor, {
        foreignKey: "idProfessor",
        targetKey:"id"
      })
    }
  };
  Localizacoes.init({
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    situacao: DataTypes.INTEGER,
    idProfessor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Localizacoes',
  });
  return Localizacoes;
};