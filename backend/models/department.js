// models/Department.js
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Department.associate = (models) => {
    // A department has many members
    Department.hasMany(models.Member, {
      foreignKey: 'departmentId',
    });
  };

  return Department;
};
