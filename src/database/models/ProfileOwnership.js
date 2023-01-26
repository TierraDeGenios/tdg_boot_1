/*CREATE TABLE profile_ownership(
	id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    developerId INT UNSIGNED NOT NULL,
    reviewerId INT UNSIGNED NOT NULL,
    ownerCategory TINYINT UNSIGNED,
    percentage TINYINT UNSIGNED,
    isActive TINYINT UNSIGNED NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (developerId) REFERENCES developer(id),
    FOREIGN KEY (reviewerId) REFERENCES reviewer(id)
);*/

module.exports = (sequelize, DataTypes) => {
    
    let alias = "ProfileOwnership";

    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        depeloperId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        reviewerId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        ownerCategory:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        percentage:{
            type: DataTypes.BOOLEAN,
            allowNull: true
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
        },
    };

    let config = {tableName: "profile_ownership", underscored: true, timestamps: false};

    const Profile_ownership = sequelize.define(alias, cols, config);
    
    return Profile_ownership;
}