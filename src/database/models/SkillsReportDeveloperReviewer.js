module.exports = (sequelize, DataTypes) => {
    
    let alias = "SkillsReportDeveloperReviewer";

    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        developerId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        reviewerId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        notes:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        reportType:{
            type: DataTypes.BOOLEAN,
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
        tableName: "skills_report_developer_reviewer", 
        timestamps: false
    };

    const SkillsReportDeveloperReviewer = sequelize.define(alias, cols, config);

    SkillsReportDeveloperReviewer.associate = (models) => {
        SkillsReportDeveloperReviewer.belongsTo(models.Developer, {
            foreignKey: "developerId"
        })
        SkillsReportDeveloperReviewer.belongsTo(models.Reviewer, {
            foreignKey: "reviewerId"
        })
        SkillsReportDeveloperReviewer.belongsToMany(models.Skill, {
            through: "SkillScore",
            foreignKey: "reportId",
            otherKey: "skillId"
        })
        SkillsReportDeveloperReviewer.hasMany(models.SkillScore, {
            foreignKey: "reportId"
        })

    }
    
    return SkillsReportDeveloperReviewer;
}