module.exports = (sequelize, DataTypes) => {
    
    let alias = "ProfileOwnership";

    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        reviewerId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        candidateId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        ownerCategory:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        percentage:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        isActive:{
            type: DataTypes.INTEGER.UNSIGNED,
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
        ProfileOwnership.belongsTo(models.User, {
            as:"reviewers",
            foreignKey: "reviewerId"
        })
        ProfileOwnership.belongsTo(models.User, {
            as:"candidates",
            foreignKey: "candidateId"
        })
    }
    
    return ProfileOwnership;
}