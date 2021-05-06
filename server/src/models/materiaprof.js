'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class materiaProf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      materiaProf.belongsTo(models.Materia, {
        foreignKey: "idMateria",
        targetKey:"id"
      })
      materiaProf.belongsTo(models.Professor, {
        foreignKey: "idProfessor",
        targetKey:"id"
      })
    }
  };
  materiaProf.init({
    idMateria: DataTypes.STRING,
    idProfessor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'materiaProf',
  });
  return materiaProf;
};