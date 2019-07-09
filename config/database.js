/*
 * Databases configuration
 */

module.exports = {
    "development": {
        "dialect": 'mysql',
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT,
        "database": process.env.DB_DATABASE,
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
    },
    "test": {
        "dialect": 'mysql',
        "host": process.env.CI_DB_HOST,
        "port": process.env.CI_DB_PORT,
        "database": process.env.CI_DB_DATABASE,
        "username": process.env.CI_DB_USERNAME,
        "password": process.env.CI_DB_PASSWORD,
    },
    "production": {
        "dialect": 'mysql',
        "host": process.env.PROD_DB_HOST,
        "port": process.env.PROD_DB_PORT,
        "database": process.env.PROD_DB_DATABASE,
        "username": process.env.PROD_DB_USERNAME,
        "password": process.env.PROD_DB_PASSWORD,
    }
};
