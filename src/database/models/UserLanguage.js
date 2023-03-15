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
        userId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        proficiencyId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
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
        tableName: "user_language",
        timestamps: false
    };

    const UserLanguage = sequelize.define(alias, cols, config);

    UserLanguage.associate = (models) => {
        //User
        UserLanguage.belongsTo(models.User, {
            foreignKey:'userId'
        });

        //Language
        UserLanguage.belongsTo(models.Language, {
            foreignKey:'languageId'
        });

        //Proficiency
        UserLanguage.belongsTo(models.Proficiency, {
            foreignKey:'proficiencyId'
        });
    }
    
    return UserLanguage;
}