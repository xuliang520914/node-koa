const { Sequelize } = require("sequelize");
const { database } = require("../config/config");

const { dbName, user, password, host, port } = database

const sequelize = new Sequelize(dbName, user, password, {
    dialect: 'mysql',
    host,
    port,
    logging: true, // 终端打印原生sql语句
    timezone: '+08:00',
    define: {
        paranoid: true,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: 'deleted_at',
        underscored: true
    }
})

sequelize.sync({ force: true })

module.exports = sequelize