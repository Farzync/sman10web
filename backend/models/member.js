// models/Member.js
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Member.associate = (models) => {
    // A member belongs to a department
    Member.belongsTo(models.Department, {
      foreignKey: 'departmentId',
    });

    // A member belongs to a profile
    Member.belongsTo(models.Profile, {
      foreignKey: 'profileId',
    });

    // A member has many hierarchies
    Member.hasMany(models.Hierarchy, {
      foreignKey: 'memberId',
    });
  };

  return Member;
};
