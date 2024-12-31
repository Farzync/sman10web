// models/Profile.js
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  Profile.associate = (models) => {
    // A profile has many members
    Profile.hasMany(models.Member, {
      foreignKey: 'profileId',
    });
  };

  return Profile;
};
