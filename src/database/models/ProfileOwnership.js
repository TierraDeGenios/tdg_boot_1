module.exports = (sequelize, DataTypes) => {
    
    let alias = "ProfileOwnership";

    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        developerId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        reviewerId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        ownerCategory:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        percentage:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        isActive:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        created_at:{
            type: DataTypes.DATE
        },
        updated_at:{
            type: DataTypes.DATE
        },
    };

    let config = {
        tableName: "profile_ownership",
        timestamps: false
    };

    const ProfileOwnership = sequelize.define(alias, cols, config);

    ProfileOwnership.associate = (models) => {
        ProfileOwnership.belongsTo(models.Developer, {
            foreignKey: "developerId"
        })
        ProfileOwnership.belongsTo(models.Reviewer, {
            foreignKey: "reviewerId"
        })
    }
    
    return ProfileOwnership;
}