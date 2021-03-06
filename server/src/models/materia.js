'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Materia.hasMany(models.materiaProf, {
        foreignKey: "idMateria",
        sourceKey:"id",
        onDelete: 'cascade',
        hooks:true
      })
    }
  };
  Materia.init({
    nome: DataTypes.STRING,
    serie: DataTypes.STRING,
    valorMateria: DataTypes.INTEGER,
    escolaridade: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Materia',
  });
  return Materia;
};