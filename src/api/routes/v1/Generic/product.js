const { getAll } = require('../../../controllers/Core/queryMethodsController');
const { deleteTransaction } = require('../../../controllers/Core/transactionController');
const { createAProduct } = require('../../../controllers/Generic/productController');

module.exports = (router, models, auth, isAdmin, sequelize) => {
  router.get('/productos/listar', auth, getAll(models, 'producto'));

  router.post('/productos/crear', auth, createAProduct(models, sequelize));

  router.post('/productos/eliminar/:id', auth, isAdmin, deleteTransaction(models, sequelize));

  return router;
};
