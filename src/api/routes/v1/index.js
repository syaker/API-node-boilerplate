const authMiddleware = require('../../middlewares/auth');
const { sequelize } = require('../../models');

const auth = require('./Authentication/auth');
const isAdmin = require('../../middlewares/validations/isAdmin');
const transactions = require('./Core/transactions');
const product = require('./Generic/product');
const type = require('./Generic/type');
const subtype = require('./Generic/subtype');
const sede = require('./Generic/sede');
const provider = require('./Generic/provider');
const purchase = require('./Incoming/purchase');
const rentalOut = require('./Outgoing/rental')
//const dashboard = require("./dashboard");
const user = require("./Generic/user");
const query = require("./Core/query")

const routes = [
  auth,
  purchase,
  product,
  transactions,
  type,
  subtype,
  sede,
  provider,
  rentalOut,
  query,
  //  dashboard,
  user,
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
