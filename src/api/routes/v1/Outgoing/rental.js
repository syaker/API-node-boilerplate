const {
    createRental,
  } = require('../../../controllers/Outgoing/rentalController.js');
  
  module.exports = (router, models, auth, isAdmin) => {
    router.get('/:id_tipo', auth, isAdmin, createRental(models));

    return router
  };
  