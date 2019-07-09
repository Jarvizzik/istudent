/*
 * General application configs
 */

module.exports = {
    "host": process.env.APP_HOST,
    "port": process.env.APP_PORT,
    "secretKey": process.env.APP_KEY || 'secret',
    "googleSecretKey": process.env.APP_GOOGLE_KEY,
    "googleClientId": process.env.APP_GOOGLE_CLIENT_ID,
    "facebookSecretKey": process.env.APP_FACEBOOK_KEY,
    "facebookClientId": process.env.APP_FACEBOOK_CLIENT,
};