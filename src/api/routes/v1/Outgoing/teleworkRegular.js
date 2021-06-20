const {
    getTeleworkRegular,
    getAnTeleworkRegular,
    createTeleworkRegular,
    updateTeleworkRegular,
    deleteTeleworkRegular,
  } = require('../../../controllers/Incoming/teleworkRegularController');
  
  module.exports = (router, models, auth, isAdmin) => {
    router.get('/salida/teletrabajo-regular', auth, getTeleworkRegular(models));
  
    router.get('/salida/teletrabajo-regular/:id', auth, getAnTeleworkRegular(models));
  
    router.post('/salida/teletrabajo-regular', auth, isAdmin, createTeleworkRegular(models));
  
    router.post('/salida/teletrabajo-regular/:id', auth, isAdmin, updateTeleworkRegular(models));
  
    router.post('/salida/teletrabajo-regular/:id'.auth, isAdmin, deleteTeleworkRegular(models));
  };