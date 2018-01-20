
module.exports = function (sequelize, DataTypes) {
    var Items = sequelize.define("Items", {
      name: DataTypes.STRING,
        
    });
    // Items.associate = function(models) {
    //     Items.hasMany(models.Items, {
    //         onDelete: "cascade"
    //     });
    // };
    return Items;
  };