const {
  getPlatform,
  getAnPlatform,
  createPlatform,
  updatePlatform,
  deletePlatform,
} = require('../../../controllers/Incoming/platformController');

module.exports = (router, models, auth, isAdmin, sequelize) => {
  router.get('/entrada/plataforma', auth, getPlatform(models, sequelize));

  router.get('/entrada/plataforma/:id', auth, getAnPlatform(models, sequelize));

  router.post('/entrada/plataforma', auth, isAdmin, createPlatform(models, sequelize));

  router.post('/entrada/plataforma/:id', auth, isAdmin, updatePlatform(models, sequelize));

  router.post('/entrada/plataforma/:id'.auth, isAdmin, deletePlatform(models, sequelize));
};
