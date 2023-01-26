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
        title: {
            type: DataTypes.STRING,
            allowNull: false

        }, 
        price: {
            type: DataTypes.INTEGER

        }, 

        size: {
            type: DataTypes.STRING
        },

        technique: {
            type: DataTypes.STRING

        },
        sold: {
            type: DataTypes.INTEGER

        },
        description: {
            type: DataTypes.STRING

        },
        image: {
            type: DataTypes.STRING

        },

    };

    let config = {
        tableName: "language",
        timestamps: true
    }

    const Language = sequelize.define(alias, cols, config)

    //después del define, establecemos las relaciones

    // Language.associate = (models) => {
    //     Language.belongsTo(models.Collection, {
    //         as: "coleccion",
    //         foreignKey: "collection_id"
    //     })

    // }


    return Language;


}
