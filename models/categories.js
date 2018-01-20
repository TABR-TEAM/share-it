
module.exports = function (sequelize, DataTypes) {
    var Categories = sequelize.define("Categories", {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      
  
    });
    // Categories.associate = function(models) {
    //     Categories.hasMany(models.Items, {
    //         onDelete: "cascade"
    //     });
    // };
    return Categories;
  };