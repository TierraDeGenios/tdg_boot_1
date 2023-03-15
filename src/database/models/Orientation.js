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
        tableName: "orientation",
        timestamps: false
    }

    const Orientation = sequelize.define(alias, cols, config)

    Orientation.associate = (models) => {
        
        Orientation.hasMany(models.Skill, {
            foreignKey: "orientationId"
        });
        
        Orientation.belongsToMany(models.TechLanguage, {
            //Al llamar la asociación se usa "Skills"
            through:'skill',
            foreignKey:'orientationId',
            otherKey:'techLanguageId',
            timestamps:false
        });

    }

    return Orientation;


}
