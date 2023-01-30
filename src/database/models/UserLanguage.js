module.exports = (sequelize, DataTypes) => {
    
    let alias = "UserLanguage";

    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        languageId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        developerId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        reviewerId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        roleId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        proficiencyId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
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
        }
    };

    let config = {
        tableName: "user_language",
        timestamps: false
    };

    const UserLanguage = sequelize.define(alias, cols, config);

    UserLanguage.associate = (models) => {
        UserLanguage.belongsTo(models.Language, {
            foreignKey:'languageId'
        });

        UserLanguage.belongsTo(models.Proficiency, {
            foreignKey:'proficiencyId'
        });

        UserLanguage.belongsTo(models.Developer, {
            foreignKey:'developerId'
        });

        UserLanguage.belongsTo(models.Reviewer, {
            foreignKey:'reviewerId'
        });

        UserLanguage.belongsTo(models.Role, {
            foreignKey:'roleId'
        });
    }
    
    return UserLanguage;
}