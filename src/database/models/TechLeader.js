module.exports = (sequelize, DataTypes) => {

    let alias = "TechLeader";

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        effectiveContracts: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        isActive: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        }
    };

    let config = {
        tableName: "tech_leader",
        timestamps: false
    };

    const TechLeader = sequelize.define(alias, cols, config);

    TechLeader.associate = (models) => {
        TechLeader.belongsTo(models.User, {
            foreignKey: "userId"
        });
    }

    return TechLeader;
}