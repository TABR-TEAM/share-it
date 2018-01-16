

module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });
    Profile.associate = function(models) {
        Profiles belongsTo(models.Profiles, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Profile;
};