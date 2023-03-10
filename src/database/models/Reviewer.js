module.exports = (sequelize, DataTypes) => {

    let alias = "Reviewer";

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
        score: {
            type: DataTypes.DECIMAL(6, 3),
            allowNull: false
        },
        effectiveContracts: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        about: {
            type: DataTypes.TEXT,
            allowNull: true
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
            type: DataTypes.STRING(150),
            allowNull: false
        },
        nickname: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        isActive: {
            type: DataTypes.BOOLEAN,
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
        tableName: "reviewer",
        timestamps: false
    };

    const Reviewer = sequelize.define(alias, cols, config);

    Reviewer.associate = (models) => {
        Reviewer.belongsTo(models.Role, {
            as: "role",
            foreignKey: "roleId"
        });

        Reviewer.belongsToMany(models.Language, {
            as: "languages",
            through:"UserLanguage",
            foreignKey: "reviewerId",
            otherKey:"languageId",
            timestamps:false
        });

        Reviewer.belongsToMany(models.Developer, {
            as: "selections",
            through:"RecruiterSelection",
            foreignKey: "reviewerId",
            otherKey:"developerId",
            timestamps:false
        });

        Reviewer.hasMany(models.UserLanguage, {
            foreignKey: "reviewerId"
        });

        Reviewer.hasMany(models.RecruiterSelection, {
            foreignKey: "reviewerId"
        });

        Reviewer.belongsToMany(models.Developer, {
            through: "ProfileOwnership",
            // la clave que hace referencia al id del developer en la tabla pivot
            foreignKey: "reviewerId",
            // la clave que hace referencia a la tabla con la que nos conectamos
            otherKey: "developerId",
            timestamps: false
        })
        Reviewer.hasMany(models.ProfileOwnership, {
            foreignKey: "reviewerId"
        })
        Reviewer.belongsToMany(models.Developer, {
            through: "skills_report_developer_reviewer",
            foreignKey: "reviewerId",
            otherKey: "developerId",
            timestamps: false
        })
        Reviewer.hasMany(models.SkillsReportDeveloperReviewer, {
            foreignKey: "reviewerId"
        })

    }

    return Reviewer;
}