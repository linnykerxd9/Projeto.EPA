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
      Aula.belongsTo(models.Materia, {
        foreignKey:"idMateria",
        targetKet:"id"
      })
      Aula.belongsTo(models.Professor, {
        foreignKey:"idProfessor",
        targetKet:"id"
      })
      Aula.belongsTo(models.Aluno, {
        foreignKey:"idAluno",
        targetKet:"id"
      })
      Aula.hasMany(models.Pagamento,{
        foreignKey:"idAula",
        sourceKey:"id"
      })
    }
  };
  Aula.init({
    horario: DataTypes.STRING,
    tempoDuracao: DataTypes.STRING,
    data: DataTypes.DATEONLY,
    idMateria: DataTypes.STRING,
    idProfessor: DataTypes.STRING,
    idAluno: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Aula',
  });
  return Aula;
};