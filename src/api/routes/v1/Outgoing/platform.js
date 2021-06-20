const {
    getPlatform,
    getAnPlatform,
    createPlatform,
    updatePlatform,
    deletePlatform,
  } = require('../../../controllers/Incoming/platformController');
  
  module.exports = (router, models, auth, isAdmin) => {
    router.get('/salida/plataforma', auth, getPlatform(models));
  
    router.get('/salida/plataforma/:id', auth, getAnPlatform(models));
  
    router.post('/salida/plataforma', auth, isAdmin, createPlatform(models));
  
    router.post('/salida/plataforma/:id', auth, isAdmin, updatePlatform(models));
  
    router.post('/salida/plataforma/:id'.auth, isAdmin, deletePlatform(models));
  };