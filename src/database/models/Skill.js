module.exports = (sequelize, DataTypes) => {
    
    let alias = "Skill";

    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        orientationId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        techLanguageId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        skillType:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isActive:{
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
        tableName: "skill",
        timestamps: false
    };

    const Skill = sequelize.define(alias, cols, config);

    Skill.associate = (models) => {
        Skill.belongsTo(models.TechLanguage, {
            foreignKey:"techLanguageId"
        });

        Skill.belongsTo(models.Orientation, {
            foreignKey:"orientationId"
        });
        Skill.belongsToMany(models.SkillsReportDeveloperReviewer, {
            through: "SkillScore",
            foreignKey: "skillId",
            otherKey: "reportId"
        })
        Skill.hasMany(models.SkillScore, {
            foreignKey: "skillId"
        })
    }
    
    return Skill;
}