'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agenda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Agenda.init({
    idAluno: DataTypes.STRING,
    idProfessor: DataTypes.STRING,
    descricao: DataTypes.STRING,
    titulo: DataTypes.STRING,
    dataAula: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Agenda',
  });
  return Agenda;
};