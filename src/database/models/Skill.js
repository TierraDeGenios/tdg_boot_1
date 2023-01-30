/*CREATE TABLE skill (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    orientationId INT UNSIGNED,
    techLanguageId INT UNSIGNED,
    name VARCHAR(45) NOT NULL,
    description TEXT,
    skillType TINYINT UNSIGNED NOT NULL,
    isActive TINYINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (orientationId) REFERENCES orientation(id),
    FOREIGN KEY (techLanguageId) REFERENCES tech_language(id)
);*/
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
        name:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        skillType:{
            type: DataTypes.INTEGER,
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

    const Skill = sequelize.define(alias, cols, config);

    Skill.associate = (models) => {
        Skill.belongsTo(models.TechLanguage, {
            foreignKey:"techLanguageId"
        });

        Skill.belongsTo(models.Orientation, {
            foreignKey:"orientationId"
        });
    }
    
    return Skill;
}