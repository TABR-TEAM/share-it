
module.exports = function (sequelize, DataTypes) {
    var Categories = sequelize.define("Categories", {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
      city: DataTypes.STRING,
  
    });
    // Categories.associate = function(models) {
    //     Categories.hasMany(models.Items, {
    //         onDelete: "cascade"
    //     });
    // };
    return Categories;
  };