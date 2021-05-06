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
        foreignKey: "idMateria",
        targetKey:"id"
      })
      Aula.belongsTo(models.Professor, {
        foreignKey: "idProfessor",
        targetKey:"id"
      })
      Aula.belongsTo(models.Aluno, {
        foreignKey: "idAluno",
        targetKey:"id"
      })
      Aula.hasMany(models.Pagamento, {
        targetKey: "idAula",
        sourceKey:"id"
      })
    }
  };
  Aula.init({
    horario: DataTypes.STRING,
    duracao: DataTypes.STRING,
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