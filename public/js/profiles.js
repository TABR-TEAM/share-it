
module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        name: DataTypes.STRING
    });
    Profile.associate = function(models) {
        Profile.hasMany(models.Items, {
            onDelete: "cascade"
        });
    };
    return Profile;
};
