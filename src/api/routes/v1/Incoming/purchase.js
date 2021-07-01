const { createController } = require('../../../controllers/Incoming/createInputController');

module.exports = (router, models, auth, isAdmin, sequelize) => {
  router.post('/entrada/compra', auth, isAdmin, createController(models, sequelize));

  return router;
};
