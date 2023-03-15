module.exports = (sequelize, DataTypes) => {

    let alias = "Developer"
    // se especifican las columnas de la db en un objeto literal
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
        address: {
            type: DataTypes.STRING(150),
        },
        zipCode: {
            type: DataTypes.STRING(10),
        },
        contractOnSite: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        contractRemote: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        contractHybrid: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        gitHubURL: {
            type: DataTypes.STRING(250),
        },
        linkedInURL: {
            type: DataTypes.STRING(250),
        },
        // portfolioURL: {
        //     type: DataTypes.STRING(250),
        // },
        headline: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        openToWork: {
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
        // freezeTableName: true,
        tableName: "developer",
        timestamps: false
    }

    const Developer = sequelize.define(alias, cols, config);
    Developer.associate = (models) => {
        Developer.belongsTo(models.User, {
            foreignKey: "userId"
        });
    }

    return Developer;
}