const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "Education"
    // se especifican las columnas de la db en un objeto literal
    let cols = {

        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        developerId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        from: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        to: {
            type: DataTypes.DATEONLY
        }, 
        current: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        institution: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        diploma_URL: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        degree: {
            type: DataTypes.STRING(200),
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
        tableName: "education",
        underscored: true,
        timestamps: false
    }

    const Education = sequelize.define(alias, cols, config)


    return Education;


}
