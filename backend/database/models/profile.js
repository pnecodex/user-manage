'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    profileiamage: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.belongsTo(models.User,{
      as:'users',
      foreignKey:'userId'
    });

  };
  return Profile;
};