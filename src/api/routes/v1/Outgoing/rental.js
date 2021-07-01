const {
    createRental,
  } = require('../../../controllers/Outgoing/rentalController.js');
  
  module.exports = (router, models, auth, isAdmin) => {
    // Aqui se puede estandarizar
    router.get('/salida/alquiler/:id_tipo', auth, isAdmin, createRental(models));

    return router
  };
  