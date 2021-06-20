const {
  getAllPurchases,
  createPurchase,
  updatePurchase,
} = require('../../../controllers/Incoming/purchaseController');

const {
  getAnTransaction,
  deleteTransaction,
} = require('../../../controllers/Core/transactionController');

module.exports = (router, models, auth, isAdmin, sequelize) => {
  router.get('/entrada/compra/listar', auth, getAllPurchases(models, sequelize));

  router.get('/entrada/compra/listar/:id_transaccion', auth, getAnTransaction(models, sequelize));

  router.post('/entrada/compra/crear', auth, isAdmin, createPurchase(models, sequelize));

  router.post(
    '/entrada/compra/editar/:id_transaccion',
    auth,
    isAdmin,
    updatePurchase(models, sequelize)
  );

  router.post(
    '/entrada/compra/eliminar/:id_transaccion',
    auth,
    isAdmin,
    deleteTransaction(models, sequelize)
  );

  return router;
};
