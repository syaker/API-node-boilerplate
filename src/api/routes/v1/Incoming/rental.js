const { createRental } = require('../../../controllers/Incoming/rentalController');

module.exports = (router, models, auth, isAdmin, sequelize) => {
  router.post('/entrada/alquiler', auth, isAdmin, createRental(models, sequelize));

  return router;
};
