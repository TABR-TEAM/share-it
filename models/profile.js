
module.exports = function (sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,

  });
  // Profile.associate = function(models) {
  //     Profile.hasMany(models.Items, {
  //         onDelete: "cascade"
  //     });
  // };
Profile.associate = function (models) {
  // Associating Profile with Posts
  // When an Profile is deleted, also delete any associated Posts
  Profile.hasMany(models.Items, {
    onDelete: "cascade"
  });
};
  return Profile;
};
