'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VisiMisi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VisiMisi.init({
    visi: DataTypes.TEXT,
    misi: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'VisiMisi',
  });
  return VisiMisi;
};