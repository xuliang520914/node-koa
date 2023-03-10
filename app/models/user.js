const { Sequelize, Model } = require("sequelize");
const sequelize = require('../../core/db')

class User extends Model {}

User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nickname: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    openid: {
        type: Sequelize.STRING(64),
        unique: true
    }
}, {sequelize,
    tableName: 'user',
})