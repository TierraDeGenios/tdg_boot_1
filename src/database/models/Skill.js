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
        languageId:{
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
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        isActive:{
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
        tableName: "skill",
        timestamps: false
    };

    const Skill = sequelize.define(alias, cols, config);

    Skill.associate = (models) => {

        //Language
        Skill.belongsTo(models.Language, {
            foreignKey:"languageId"
        });

        //Orientation
        Skill.belongsTo(models.Orientation, {
            foreignKey:"orientationId"
        });

        //TechLanguage
        Skill.belongsTo(models.TechLanguage, {
            foreignKey:"techLanguageId"
        });

        //SkillScore
        Skill.hasMany(models.SkillScore, {
            foreignKey: "skillId"
        });

        //SkillsReportDeveloperReviewer
        Skill.belongsToMany(models.SkillsReportDeveloperReviewer, {
            through: "skill_score",
            foreignKey: "skillId",
            otherKey: "reportId"
        });
        
    }
    
    return Skill;
}