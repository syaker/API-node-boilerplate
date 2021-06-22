const { createPlatform } = require('../../../controllers/Incoming/platformController');

module.exports = (router, models, auth, isAdmin) => {
  router.post('/salida/plataforma', auth, isAdmin, createPlatform(models));
};
