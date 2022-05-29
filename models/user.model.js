const {sequelize,DataTypes} = require('../database');

const User  = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    jabatan_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    verifikasi:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },

    // otomatis di isi oleh sequilize
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
        tableName: 'users',
});

module.exports = User;