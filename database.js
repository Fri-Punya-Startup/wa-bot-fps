const { Sequelize,DataTypes } = require('sequelize');

const db = "fps"
const user = "root"
const pass = ""
const dialect = "mysql"

const sequelize = new Sequelize(db, user, pass, {
    host: 'localhost',
    dialect: dialect,
});

try {
    sequelize.authenticate();
    console.log('Koneksi ke database berhasil');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = {sequelize,DataTypes};