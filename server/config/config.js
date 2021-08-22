const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: 'mongodb://localhost:27017/rest-api-db',
        authCookieName: 'x-auth-token',
        origin: ['http://localhost:5555', 'http://localhost:4200', 'http://localhost:3000']
    },
    production: {}
};

module.exports = config[env];