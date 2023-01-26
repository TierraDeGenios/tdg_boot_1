/*CREATE TABLE reviewer (
    id  INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    roleId  INT UNSIGNED NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    imgURL VARCHAR(250) NOT NULL,
    avatarURL VARCHAR(250) NOT NULL,
    score DECIMAL(6,3) NOT NULL,
    effectiveContracts SMALLINT UNSIGNED NOT NULL,
    about TEXT,
    gender TINYINT UNSIGNED NOT NULL,
    birthdate DATE NOT NULL,
    password VARCHAR(150) NOT NULL,
    nickname VARCHAR(50) NOT NULL,
    isActive TINYINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (roleId) REFERENCES role(id)
);*/
module.exports = (sequelize, DataTypes) => {
    
    let alias = "Reviewer";

    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        roleId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        firstName:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastName:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        imgURL:{
            type: DataTypes.STRING(250),
            allowNull: false
        },
        avatarURL:{
            type: DataTypes.STRING(250),
            allowNull: false
        },
        score:{
            type: DataTypes.DECIMAL(6, 3),
            allowNull: false
        },
        effectiveContracts:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        about:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        gender:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        birthdate:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING(150),
            allowNull: false
        },
        nickname:{
            type: DataTypes.STRING(50),
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

    let config = {tableName: "reviewer", underscored: true, timestamps: false};

    const Reviewer = sequelize.define(alias, cols, config);

    return Reviewer;
}