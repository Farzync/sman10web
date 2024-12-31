'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Berita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Berita.init({
    judul: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    longdesc: DataTypes.TEXT,
    gambar: DataTypes.STRING,
    url: DataTypes.STRING,
    slug: DataTypes.STRING,
    tanggal: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Berita',
  });
  return Berita;
};