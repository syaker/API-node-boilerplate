const { createPurchase } = require('../../../controllers/Incoming/createController');

module.exports = (router, models, auth, isAdmin, sequelize) => {
  router.post('/entrada/compra', auth, isAdmin, createPurchase(models, sequelize));

  return router;
};
