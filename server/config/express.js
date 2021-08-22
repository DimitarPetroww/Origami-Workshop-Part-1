const express = require("express")
const cp = require('cookie-parser');
const config = require("./config")
const cors = require('cors');

module.exports = (app) => {
    app.use(cors({
        origin: config.origin,
        credentials: true,
    }));
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use(cp());
};