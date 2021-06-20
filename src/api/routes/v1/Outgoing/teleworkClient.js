const {
    getTeleworkClient,
    getAnTeleworkClient,
    createTeleworkClient,
    updateTeleworkClient,
    deleteTeleworkClient,
  } = require('../../../controllers/Incoming/teleworkClientController');
  
  module.exports = (router, models, auth, isAdmin) => {
    router.get('/salida/teletrabajo-cliente', auth, getTeleworkClient(models));
  
    router.get('/salida/teletrabajo-cliente/:id', auth, getAnTeleworkClient(models));
  
    router.post('/salida/teletrabajo-cliente', auth, isAdmin, createTeleworkClient(models));
  
    router.post('/salida/teletrabajo-cliente/:id', auth, isAdmin, updateTeleworkClient(models));
  
    router.post('/salida/teletrabajo-cliente/:id'.auth, isAdmin, deleteTeleworkClient(models));
  };