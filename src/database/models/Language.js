const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "Language"
    // se especifican las columnas de la db en un objeto literal
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        }, 
        isActive: {
            type: DataTypes.INTEGER.UNSIGNED,
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
        tableName: "language",
        timestamps: false
    }

    const Language = sequelize.define(alias, cols, config)

    Language.associate = (models) => {
        
        Language.hasMany(models.Skill, {
            foreignKey: "languageId"
        });

        Language.hasMany(models.UserLanguage, {
            foreignKey: "languageId"
        });

        Language.belongsToMany(models.User, {
            as: "users",
            through:'user_language',
            foreignKey:'languageId',
            otherKey:'userId',
            timestamps:false
        });

        Language.belongsToMany(models.Proficiency, {
            through:'user_language',
            foreignKey:'languageId',
            otherKey:'proficiencyId',
            timestamps:false
        });
        

    }

    return Language;


}
