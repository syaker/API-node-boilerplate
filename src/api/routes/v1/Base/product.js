const { getAll } = require('../../../controllers/Tools/queryController');
const { deleteTransaction } = require('../../../controllers/Core/transactionController');
const { createAProduct, findAllProductsAvailable } = require('../../../controllers/Base/productController');

module.exports = (router, models, auth, isAdmin, sequelize) => {
  router.get('/productos/listar', auth, getAll(models, 'producto'));

  router.post('/productos/crear', auth, createAProduct(models, sequelize));

  router.post('/productos/eliminar/:id', auth, isAdmin, deleteTransaction(models, sequelize));

  router.get('/productos/stock', auth, findAllProductsAvailable(models, sequelize))

  return router;
};
