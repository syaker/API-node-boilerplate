const { createTeleworkClient } = require('../../../controllers/Outgoing/teleworkClientController');

module.exports = (router, models, auth, isAdmin, sequelize) => {
  router.get('/salida/teletrabajo-cliente', auth, isAdmin, createTeleworkClient(models, sequelize));

  return router;
};
