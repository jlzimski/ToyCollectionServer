const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:endor1979@localhost:5432/toycollection");

module.exports = sequelize;