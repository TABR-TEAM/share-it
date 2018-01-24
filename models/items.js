module.exports = function (sequelize, DataTypes) {
    var Items = sequelize.define("Items", {
      item_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      category: DataTypes.STRING,
      item_description: DataTypes.STRING,
      item_image: DataTypes.STRING,
      item_name: DataTypes.STRING
  
  
  
    });
    // Items.associate = function(models) {
    //     Items.belongsTo(models.Profiles, {
    //         onDelete: "cascade"
    //     });
    // };
    Items.associate = function (models) {
      // We're saying that a Items should belong to an Author
      // A Items can't be created without an Author due to the foreign key constraint
      Items.belongsTo(models.Profile, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Items;
  };