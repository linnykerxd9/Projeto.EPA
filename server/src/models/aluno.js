'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Aluno.hasMany(models.pedidoDoacao, {
        foreignKey: "idAluno",
        sourceKey:"id"
      })
      Aluno.hasMany(models.Aula, {
        foreignKey: "idAluno",
        sourceKey:"id"
      })
      Aluno.hasMany(models.Agenda, {
        foreignKey: "idAluno",
        sourceKey:"id"
      })
    }
  };
  Aluno.init({
    email: DataTypes.STRING,
    nome_completo: DataTypes.STRING,
    telefone: DataTypes.STRING,
    cpf: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cep: DataTypes.STRING,
    cidade: DataTypes.STRING,
    idade: DataTypes.STRING,
    estado: DataTypes.STRING,
    rua: DataTypes.STRING,
    senha: DataTypes.STRING,
    saldo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aluno',
  });
  return Aluno;
};