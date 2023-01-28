const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "Proficiency"
    // se especifican las columnas de la db en un objeto literal
    let cols = {

        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        proficiency: {
            type: DataTypes.STRING(30),
            allowNull: false
        },

        isActive: {
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
        tableName: "proficiency",
        timestamps: false
    }

    const Proficiency = sequelize.define(alias, cols, config)

    Proficiency.associate = (models) => {
        Proficiency.belongsToMany(models.Language, {
            through:'UserLanguage',
            foreignKey:'proficiencyId',
            otherKey:'languageId',
            timestamps:false
        });
        Proficiency.hasMany(models.UserLanguage, {
            foreignKey: "proficiencyId"
        });
    }

    return Proficiency;


}
