const { deleteTransaction } = require('../../../controllers/Core/transactionController');
const { createAProduct, getAllProducts } = require('../../../controllers/Generic/productController');

module.exports = (router, models, auth, isAdmin, sequelize) => {
  router.get('/productos/listar', auth, getAllProducts(models, sequelize));

  router.post('/productos/crear', auth, createAProduct(models, sequelize));

  router.post('/productos/eliminar/:id', auth, isAdmin, deleteTransaction(models, sequelize));

  return router;
};
