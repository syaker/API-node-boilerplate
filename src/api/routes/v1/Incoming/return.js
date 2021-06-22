const { createReturn } = require('../../../controllers/Incoming/returnController');

module.exports = (router, models, auth, isAdmin, sequelize) => {
  router.post('/entrada/devolucion', auth, isAdmin, createReturn(models, sequelize));

  return router;
};
