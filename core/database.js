/*
 * Database connection
 */
const Sequelize = require('sequelize');
const config = require('./../config/database');
const db = config[process.env.APP_ENV];

module.exports = new Sequelize(
    db.database,
    db.username,
    db.password, db
);