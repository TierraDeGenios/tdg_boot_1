const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "User"
    // se especifican las columnas de la db en un objeto literal
    let cols = {

        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        roleId: {
            type: DataTypes.INTEGER.UNSIGNED,
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
            allowNull: false,
            unique: true
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
            type: DataTypes.INTEGER.UNSIGNED,
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
        nickname: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        country: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        isActive: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE
        },

        updated_at: {
            type: DataTypes.DATE
        }
    };

    let config = {
        // freezeTableName: true,
        tableName: "user",
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        //Developer
        User.hasOne(models.Developer, {
            foreignKey: "userId"
        });

        //Recruiter
        User.hasOne(models.Recruiter, {
            foreignKey: "userId"
        });

        //TechLeader
        User.hasOne(models.TechLeader, {
            foreignKey: "userId"
        });

        //Role
        User.belongsTo(models.Role, {
            foreignKey: "roleId"
        });

        //Education
        User.hasMany(models.Education, {
            as: "educations",
            foreignKey: "userId"
        });

        //WorkExperience
        User.hasMany(models.WorkExperience, {
            as: "workExperiences",
            foreignKey: "userId"
        });

        //RecruiterSelection
        User.hasMany(models.RecruiterSelection, {
            as:"reviewer1",
            foreignKey: "reviewerId"
        });
        User.hasMany(models.RecruiterSelection, {
            as:"candidate1",
            foreignKey: "candidateId"
        });
        
        //ProfileOwnership
        User.hasMany(models.ProfileOwnership, {
            as:"reviewer2",
            foreignKey: "reviewerId"
        });
        User.hasMany(models.ProfileOwnership, {
            as:"candidate2",
            foreignKey: "candidateId"
        });

        //SkillsReportDeveloperReviewer
        User.hasMany(models.SkillsReportDeveloperReviewer, {
            as:"reviewer3",
            foreignKey: "reviewerId"
        });
        User.hasMany(models.SkillsReportDeveloperReviewer, {
            as:"candidate3",
            foreignKey: "candidateId"
        });

        //UserLanguage
        User.hasMany(models.UserLanguage, {
            //Al llamar la asociación se usa "UserLanguages"
            foreignKey: "userId"
        });

        //Language
        User.belongsToMany(models.Language, {
            as: "languages",
            through:'UserLanguage',
            foreignKey:'userId',
            otherKey:'languageId',
            timestamps:false
        });
        
    }


    return User;


}
