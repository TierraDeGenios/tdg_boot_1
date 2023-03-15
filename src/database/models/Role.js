module.exports = (sequelize, DataTypes) => {
    
    let alias = "Role";

    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(50),
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
        tableName: "role",
        timestamps: false
    };

    const Role = sequelize.define(alias, cols, config);

    Role.associate = (models) => {
        Role.hasMany(models.User, {
            foreignKey: "roleId"
        })
    }
    
    return Role;
}