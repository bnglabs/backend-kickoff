require('dotenv').config()

module.exports = {
    stripe_Api_key: process.env.STRIPE_KEY,
    stripe_secret_key: process.env.STRIPE_SECRET,
}

module.exports = {
    HOST: 'localhost',
    PORT: process.env.PORT,
    dbName: process.env.dbName,
    dbPassword: process.env.dbPassword,
    secret: 'SECRET'
};