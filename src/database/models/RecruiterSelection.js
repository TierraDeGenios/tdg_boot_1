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
        candidateId:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        notes:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        authorization:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        hired:{
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
        tableName: "recruiter_selection", 
        timestamps: false
    };

    const RecruiterSelection = sequelize.define(alias, cols, config);

    RecruiterSelection.associate = (models) => {
        RecruiterSelection.belongsTo(models.User, {
            as:'reviewers',
            foreignKey:'reviewerId'
        });

        RecruiterSelection.belongsTo(models.User, {
            as:'candidates',
            foreignKey:'candidateId'
        });
    }
    
    return RecruiterSelection;
}