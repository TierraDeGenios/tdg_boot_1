const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "TechLanguage"
    // se especifican las columnas de la db en un objeto literal
    let cols = {

        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING(20),
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
        // freezeTableName: true,
        tableName: "tech_language",
        timestamps: false
    }

    const TechLanguage = sequelize.define(alias, cols, config)

    TechLanguage.associate = (models) => {
        TechLanguage.belongsToMany(models.Orientation, {
            //Al llamar la asociación se usa "Skills"
            through:'Skill',
            foreignKey:'techLanguageId',
            otherKey:'orientationId',
            timestamps:false
        });

        TechLanguage.hasMany(models.Skill, {
            foreignKey: "techLanguageId"
        });
    }

    return TechLanguage;


}
