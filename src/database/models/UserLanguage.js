/*CREATE TABLE user_language (
	id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    languageId INT UNSIGNED NOT NULL,
    developerId INT UNSIGNED,
    reviewerId INT UNSIGNED,
    roleId INT UNSIGNED,
    proficiencyId INT UNSIGNED NOT NULL,
    isActive TINYINT UNSIGNED NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (languageId) REFERENCES language(id),
    FOREIGN KEY (developerId) REFERENCES developer(id),
    FOREIGN KEY (reviewerId) REFERENCES reviewer(id),
	FOREIGN KEY (roleId) REFERENCES role (id),
    FOREIGN KEY (proficiencyId) REFERENCES proficiency(id)
);*/
module.exports = (sequelize, DataTypes) => {
    
    let alias = "UserLanguage";

    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        languageId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        developerId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        reviewerId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        roleId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        proficiencyId:{
            type: DataTypes.INTEGER.UNSIGNED,
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

    const User_language = sequelize.define(alias, cols, config);
    
    return User_language;
}