const { createTeleworkClient } = require('../../../controllers/Incoming/teleworkClientController');

module.exports = (router, models, auth, isAdmin) => {
  router.post('/salida/teletrabajo-cliente', auth, isAdmin, createTeleworkClient(models));

  return router;
};
