/*
            intelliQ
    API (Backend) Application
        Configuration File
*/

const config = {
    http: {
        enabled: true,
        host: "127.0.0.1",
        port: 9102

    },

    https: {
        enabled: false,
        host: "127.0.0.1",
        port: 9103,
        ssl: {
            key: "",
            cert: ""
        }
    },

    cors: {
        origin: /^(http:\/\/|https:\/\/)?(intelliq.site|localhost)\/?$/,
        optionsSuccessStatus: 200
    },

    docs: {
        enabled: true
    },

    mariadb: {
        host: "127.0.0.1",
        port: 3306,
        user: "intelliq",
        password: "",
        database: "intelliq"
    }
};

module.exports = config;