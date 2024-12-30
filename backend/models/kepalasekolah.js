'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class KepalaSekolah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  KepalaSekolah.init({
    nama: {
      type: DataTypes.STRING,
      allowNull: false, // Pastikan nama tidak boleh null
    },
    gambar: {
      type: DataTypes.STRING,
      allowNull: false, // Pastikan gambar tidak boleh null
    },
    sambutan: {
      type: DataTypes.TEXT,
      allowNull: false, // Pastikan sambutan tidak boleh null
    }
  }, {
    sequelize,
    modelName: 'KepalaSekolah',
    tableName: 'KepalaSekolah', // Menentukan nama tabel jika berbeda
    timestamps: true, // Menambahkan createdAt dan updatedAt secara otomatis
  });

  return KepalaSekolah;
};