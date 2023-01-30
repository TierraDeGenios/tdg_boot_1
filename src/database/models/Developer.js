const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "Developer"
    // se especifican las columnas de la db en un objeto literal
    let cols = {

        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        averageScore: {
            type: DataTypes.DECIMAL(6, 3),
            allowNull: false
        }, 
        about: {
            type: DataTypes.TEXT,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        imgURL: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        avatarURL: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        gender: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        birthdate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        country: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        address: {
            type: DataTypes.STRING(150),
        },
        zipCode: {
            type: DataTypes.STRING(10),
        },
        nickname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        contractOnSite: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        contractRemote: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        contractHybrid: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        gitHubURL: {
            type: DataTypes.STRING(250),
        },
        linkedInURL: {
            type: DataTypes.STRING(250),
        },
        headline: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        openToWork: {
            type: DataTypes.BOOLEAN,
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
        //freezeTableName: true,
        tableName: "developer",
        timestamps: false
    }

    const Developer = sequelize.define(alias, cols, config)

    Developer.associate = (models) => {
        Developer.hasMany(models.WorkExperience, {
            as: "workExperiences",
            foreignKey: "developerId"
        });

        Developer.hasMany(models.Education, {
            as: "educations",
            foreignKey: "developerId"
        });

        Developer.belongsToMany(models.Reviewer, {
            through:"RecruiterSelection",
            foreignKey: "developerId",
            otherKey:"reviewerId",
            timestamps:false
        });

        Developer.hasMany(models.UserLanguage, {
            foreignKey: "developerId"
        });

        Developer.hasMany(models.RecruiterSelection, {
            foreignKey: "developerId"
        });
        
    };


    return Developer;


}
