
module.exports = function (sequelize, DataTypes) {
    var Items = sequelize.define("Items", {
      name: DataTypes.STRING,
      description: DataTypes.TEXT
        
    });
    // Items.associate = function(models) {
    //     Items.belongsTo(models.Profiles, {
    //         onDelete: "cascade"
    //     });
    // };
    return Items;
  };