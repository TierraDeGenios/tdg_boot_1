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
        tableName: "recruiterSelection", 
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