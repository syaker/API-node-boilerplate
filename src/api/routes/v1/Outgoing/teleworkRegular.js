const {
  createTeleworkRegular,
} = require('../../../controllers/Incoming/teleworkRegularController');

module.exports = (router, models, auth, isAdmin) => {
  router.post('/salida/teletrabajo-regular', auth, isAdmin, createTeleworkRegular(models));

  return router;
};
