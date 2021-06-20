const {
    getRental,
    getAnRental,
    createRental,
    updateRental,
    deleteRental,
  } = require('../../../controllers/Incoming/rentalController');
  
  module.exports = (router, models, auth, isAdmin) => {
    router.get('/salida/alquiler', auth, getRental(models));
  
    router.get('/salida/alquiler/:id', auth, getAnRental(models));
  
    router.post('/salida/alquiler', auth, isAdmin, createRental(models));
  
    router.post('/salida/alquiler/:id', auth, isAdmin, updateRental(models));
  
    router.post('/salida/alquiler/:id'.auth, isAdmin, deleteRental(models));
  };
  