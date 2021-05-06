'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avaliacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Avaliacao.belongsTo(models.Aluno, {
        foreignKey: "idAluno",
        targetKey:"id"
      })
      Avaliacao.belongsTo(models.Professor, {
        foreignKey: "idProfessor",
        targetKey:"id"
      })
      Avaliacao.belongsTo(models.Aula, {
        foreignKey: "idAula",
        targetKey:"id"
      })
    }
  };
  Avaliacao.init({
    idAluno: DataTypes.STRING,
    idAula: DataTypes.STRING,
    idProfessor: DataTypes.STRING,
    estrelas: DataTypes.INTEGER,
    comentario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Avaliacao',
  });
  return Avaliacao;
};