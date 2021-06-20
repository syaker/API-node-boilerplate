const { db_host, db_name, db_password, db_user } = require('../config/config');

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: db_host,
  dialect: 'mssql',
});

const initModels = require('./init-models');
let models = initModels(sequelize);

module.exports = {
  models,
  sequelize
};
