const {sequelize,DataTypes} = require('../database');

module.exports = Event = sequelize.define('Event', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true  
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    slug:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    key:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    poster:{
        type: DataTypes.STRING,
        allowNull: false
    },
    grup_wa:{
        type: DataTypes.STRING,
        allowNull: false
    },
    zoom_id:{
        type: DataTypes.STRING,
        allowNull: false
    },
    zoom_pass:{
        type: DataTypes.STRING,
        allowNull: false
    },
    zoom:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tanggal:{
        type: DataTypes.STRING,
        allowNull: false
    },
    waktu: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
        allowNull: false
    }
    },{
        tableName: 'events',
});

