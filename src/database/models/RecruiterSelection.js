/*CREATE TABLE recruiterSelection (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	reviewerId INT UNSIGNED NOT NULL,
    developerId INT UNSIGNED NOT NULL ,
    notes TEXT,
    authorization TINYINT UNSIGNED NOT NULL,
    status TINYINT UNSIGNED NOT NULL,
    isActive TINYINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (reviewerId) REFERENCES reviewer(id),
    FOREIGN KEY(developerId) REFERENCES developer(id)
);*/
module.exports = (sequelize, DataTypes) => {
    
    let alias = "RecruiterSelection";

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
        developerId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        notes:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        authorization:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        status:{
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
        freezeTableName: true, 
        timestamps: false
    };

    const RecruiterSelection = sequelize.define(alias, cols, config);

    RecruiterSelection.associate = (models) => {
        RecruiterSelection.belongsTo(models.Developer, {
            foreignKey:'developerId'
        });

        RecruiterSelection.belongsTo(models.Reviewer, {
            foreignKey:'reviewerId'
        });
    }
    
    return RecruiterSelection;
}