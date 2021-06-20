const authMiddleware = require('../../middlewares/auth');

const auth = require('./Authentication/auth');
//const dashboard = require("./dashboard");
//const user = require("./user");
const isAdmin = require('../../middlewares/validations/isAdmin');
const purchase = require('./Incoming/purchase');
const product = require('./Generic/product');
const transactions = require('./Core/transactions');

const { sequelize } = require('../../models');
const type = require('./Generic/type');
const subtype = require('./Generic/subtype');
const sede = require('./Generic/sede');
const provider = require('./Generic/provider');

const routes = [
  auth,
  purchase,
  product,
  transactions,
  type,
  subtype,
  sede,
  provider
  //  dashboard,
  //  user,
];

const registerRoutes = (app, router, models) => {
  if (router.length == 0) return next();
  routes.forEach((route) => {
    app.use('/', route(router, models, authMiddleware, isAdmin, sequelize));
  });
};

module.exports = {
  registerRoutes,
};
