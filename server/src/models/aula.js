'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Aula.init({
    horario: DataTypes.STRING,
    duracao: DataTypes.STRING,
    data: DataTypes.DATEONLY,
    idPagamento: DataTypes.STRING,
    idMateria: DataTypes.STRING,
    idProfessor: DataTypes.STRING,
    idAluno: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Aula',
  });
  return Aula;
};