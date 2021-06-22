const { createPlatform } = require('../../../controllers/Incoming/platformController');

module.exports = (router, models, auth, isAdmin, sequelize) => {
  router.post('/entrada/plataforma', auth, isAdmin, createPlatform(models, sequelize));

  return router;
};
