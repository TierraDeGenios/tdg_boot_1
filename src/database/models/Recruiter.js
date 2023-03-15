module.exports = (sequelize, DataTypes) => {

    let alias = "Recruiter";

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
        tableName: "recruiter",
        timestamps: false
    };

    const Reviewer = sequelize.define(alias, cols, config);

    Reviewer.associate = (models) => {
        Reviewer.belongsTo(models.Role, {
            foreignKey: "userId"
        });
    }

    return Reviewer;
}