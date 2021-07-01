const authMiddleware = require('../../middlewares/auth');
const { sequelize } = require('../../models');

const auth = require('./Authentication/auth');
const isAdmin = require('../../middlewares/validations/isAdmin');
const transactions = require('./Core/transactions');

// Base
const product = require('./Base/product');
const type = require('./Base/type');
const subtype = require('./Base/subtype');
const sede = require('./Base/sede');
const provider = require('./Base/provider');
const user = require("./Base/user");
//const dashboard = require("./Base/dashboard");

// Incoming
const purchase = require('./Incoming/purchase');
const rentalIn = require('./Incoming/rental');
const platformIn = require('./Incoming/platform');

// Out
const teleworkClient = require('./Outgoing/teleworkClient');
const rentalOut = require('./Outgoing/rental');

// Tools
const sendMail = require('./Tools/sendMail');

// Rutas

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
  teleworkClient,
  //  dashboard,
  user,
  rentalIn,
  platformIn,
  sendMail,
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
