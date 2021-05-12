'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Config extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Config.init({
    preProfessor: DataTypes.STRING,
    preAluno: DataTypes.STRING,
    preAula: DataTypes.STRING,
    preAvaliacao: DataTypes.STRING,
    preDoacao: DataTypes.STRING,
    preLocalizacao: DataTypes.STRING,
    preMateria: DataTypes.STRING,
    preAgenda: DataTypes.STRING,
    prePagamento: DataTypes.STRING,
    preStatus: DataTypes.STRING,
    preMateriaProf: DataTypes.STRING,
    prePedidoDoacao: DataTypes.STRING,
    ultimoIdProfessor: DataTypes.INTEGER,
    ultimoIdAluno: DataTypes.INTEGER,
    ultimoIdAula: DataTypes.INTEGER,
    ultimoIdAvaliacao: DataTypes.INTEGER,
    ultimoIdDoacao: DataTypes.INTEGER,
    ultimoIdLocalizacao: DataTypes.INTEGER,
    ultimoIdMateria: DataTypes.INTEGER,
    ultimoIdAgenda: DataTypes.INTEGER,
    ultimoIdPagamento: DataTypes.INTEGER,
    ultimoIdStatus: DataTypes.INTEGER,
    ultimoIdMateriaProf: DataTypes.INTEGER,
    ultimoIdPedidoDoacao: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Config',
  });
  return Config;
};