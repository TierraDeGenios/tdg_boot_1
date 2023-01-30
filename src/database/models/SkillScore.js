module.exports = (sequelize, DataTypes) => {
    
    let alias = "SkillScore";

    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        reportId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        skillId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        score:{
            type: DataTypes.DECIMAL(6, 3),
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
        tableName: "skill_score",
        timestamps: false
    };

    const SkillScore = sequelize.define(alias, cols, config);

    SkillScore.associate = (models) => {
        SkillScore.belongsTo(models.SkillsReportDeveloperReviewer, {
            foreignKey: "reportId"
        })
        SkillScore.belongsTo(models.Skill, {
            foreignKey: "skillId"
        })
    }
    
    return SkillScore;
}