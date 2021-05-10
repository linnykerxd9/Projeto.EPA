'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pagamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pagamento.belongsTo(models.Aula, {
        foreignKey: "idAula",
        targetKey:"id"
      })
      Pagamento.belongsTo(models.Status, {
        foreignKey: "idStatus",
        targetKey:"id"
      })
    }
  };
  Pagamento.init({
    valor: DataTypes.INTEGER,
    metodoPagamento: DataTypes.STRING,
    contaBancoReceber: DataTypes.STRING,
    contaBancoPagador: DataTypes.STRING,
    idAula: DataTypes.STRING,
    idStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pagamento',
  });
  return Pagamento;
};
