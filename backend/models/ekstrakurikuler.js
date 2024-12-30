'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ekstrakurikuler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ekstrakurikuler.init({
    logo: DataTypes.STRING,
    shortName: DataTypes.STRING,
    fullName: DataTypes.STRING,
    description: DataTypes.TEXT,
    chairman: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ekstrakurikuler',
  });
  return Ekstrakurikuler;
};