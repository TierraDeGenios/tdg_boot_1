/*CREATE TABLE skills_report_developer_reviewer (
	id  INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    developerId INT UNSIGNED NOT NULL,
    reviewerId INT UNSIGNED NOT NULL,
    notes TEXT NOT NULL,
    reportType TINYINT NOT NULL,
	isActive TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (developerId) REFERENCES developer(id),
	FOREIGN KEY (reviewerId) REFERENCES reviewer(id)
);*/
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

    const Skills_report_developer_reviewer = sequelize.define(alias, cols, config);
    
    return Skills_report_developer_reviewer;
}