module.exports = (sequelize, DataTypes) => {
    
    let alias = "SkillsReportDeveloperReviewer";

    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        reviewerId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        candidateId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        notes:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        reportType:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        // approved:{
        //     type: DataTypes.INTEGER.UNSIGNED,
        //     allowNull: false
        // },
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
        tableName: "skills_report_developer_reviewer", 
        timestamps: false
    };

    const SkillsReportDeveloperReviewer = sequelize.define(alias, cols, config);

    SkillsReportDeveloperReviewer.associate = (models) => {
        SkillsReportDeveloperReviewer.hasMany(models.SkillScore, {
            foreignKey: "reportId"
        });
        
        SkillsReportDeveloperReviewer.belongsTo(models.User, {
            as:"rewievers",
            foreignKey: "reviewerId"
        });

        SkillsReportDeveloperReviewer.belongsTo(models.User, {
            as:"candidates",
            foreignKey: "candidateId"
        });

        SkillsReportDeveloperReviewer.belongsToMany(models.Skill, {
            through: "SkillScore",
            foreignKey: "reportId",
            otherKey: "skillId"
        });

    }
    
    return SkillsReportDeveloperReviewer;
}