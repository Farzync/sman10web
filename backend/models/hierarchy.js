// models/Hierarchy.js
module.exports = (sequelize, DataTypes) => {
  const Hierarchy = sequelize.define('Hierarchy', {
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Hierarchy.associate = (models) => {
    // A hierarchy belongs to a member
    Hierarchy.belongsTo(models.Member, {
      foreignKey: 'memberId',
    });
  };

  return Hierarchy;
};
