const { deleteTransaction } = require('../../../controllers/Core/transactionController');
const { createASubtype, getAllSubtype } = require('../../../controllers/Generic/subtypeController');

module.exports = (router, models, auth, isAdmin, sequelize) => {
  router.get('/subtipo/:id_tipo', auth, getAllSubtype(models, sequelize));

  router.post('/subtipo/crear', auth, createASubtype(models, sequelize));

  router.post('/subtipo/eliminar/:id', auth, isAdmin, deleteTransaction(models, sequelize));

  return router;
};
