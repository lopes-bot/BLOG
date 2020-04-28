const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Postage = require("../models/Postage");

const connection = new Sequelize(dbConfig);


Postage.init(connection);


module.exports = connection;
