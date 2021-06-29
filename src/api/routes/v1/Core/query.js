const { getStock, getRelatedProducts } = require('../../../controllers/Core/queryMethodsController');

module.exports = (router, models, auth, isAdmin, sequelize) => {
  router.get('/stock/:modo', auth, isAdmin, getStock(models));

  // router.get('/:mode/:type/:id/', auth, isAdmin, getRelatedProducts(models))

  return router;
};
