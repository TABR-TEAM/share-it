
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
    return Profile;
  };
  