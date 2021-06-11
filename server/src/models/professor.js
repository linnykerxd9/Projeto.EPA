'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Professor.hasMany(models.Agenda, {
        foreignKey: "idProfessor",
        sourceKey:"id"
      })
      Professor.hasMany(models.Localizacoes, {
        foreignKey: "idProfessor",
        sourceKey:"id"
      })
      Professor.hasMany(models.Aula, {
        foreignKey: "idProfessor",
        sourceKey:"id"
      })
      Professor.hasMany(models.materiaProf, {
        foreignKey: "idProfessor",
        sourceKey:"id",
        onDelete: 'cascade',
        hooks:true
      })
    }
  };
  Professor.init({
    email: DataTypes.STRING,
    nome_completo: DataTypes.STRING,
    telefone: DataTypes.STRING,
    cpf: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cep: DataTypes.STRING,
    cidade: DataTypes.STRING,
    dataNascimento: DataTypes.STRING,
    sexo: DataTypes.STRING,
    sobre: DataTypes.STRING,
    estado: DataTypes.STRING,
    rua: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professor',
  });
  return Professor;
};