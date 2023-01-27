/*CREATE TABLE skill_score (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    reportId INT UNSIGNED NOT NULL,
    skillId INT UNSIGNED NOT NULL,
    score DECIMAL(6,3) NOT NULL,
    isActive TINYINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (reportId) REFERENCES skills_report_developer_reviewer(id),
    FOREIGN KEY (skillId) REFERENCES skill(id)
);*/
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

    const Skill_score = sequelize.define(alias, cols, config);
    
    return Skill_score;
}