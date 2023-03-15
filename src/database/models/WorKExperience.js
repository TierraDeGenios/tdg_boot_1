const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "WorkExperience"
    // se especifican las columnas de la db en un objeto literal
    let cols = {

        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userId: {
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
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        company: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        position: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        paid: {
            type: DataTypes.INTEGER.UNSIGNED,
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
        tableName: "work_experience",
        timestamps: false
    }

    const WorkExperience = sequelize.define(alias, cols, config)

    WorkExperience.associate = (models) => {
        WorkExperience.belongsTo(models.User, {
            as: "user",
            foreignKey: "userId"
        })
    }

    


    return WorkExperience;


}
