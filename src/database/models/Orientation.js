const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "Orientation"
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
        freezeTableName: true,
        timestamps: false
    }

    const Orientation = sequelize.define(alias, cols, config)

    Orientation.associate = (models) => {
        Orientation.belongsToMany(models.TechLanguage, {
            //Al llamar la asociación se usa "Skills"
            through:'Skill',
            foreignKey:'orientationId',
            otherKey:'techLanguageId',
            timestamps:false
        });

        Orientation.hasMany(models.Skill, {
            foreignKey: "orientationId"
        });
    }

    return Orientation;


}
