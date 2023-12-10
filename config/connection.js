const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('techblog_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
});

module.exports = sequelize;
