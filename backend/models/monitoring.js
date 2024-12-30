'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Monitoring extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Monitoring.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Monitoring',
  });
  return Monitoring;
};