const { createController } = require('../../../controllers/Incoming/createInputController');

module.exports = (router, models, auth, isAdmin, sequelize) => {
  router.post('/entrada/alquiler', auth, isAdmin, createController(models, sequelize));

  return router;
};
