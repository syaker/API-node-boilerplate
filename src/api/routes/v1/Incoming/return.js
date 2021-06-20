const {
    getReturn,
    getAnReturn,
    createReturn,
    updateReturn,
    deleteReturn,
  } = require('../../../controllers/Incoming/returnController');
  
  module.exports = (router, models, auth, isAdmin, sequelize) => {
    router.get('/entrada/devolucion/listar', auth, getReturn(models, sequelize));
  
    router.get('/entrada/devolucion/listar/:id', auth, getAnReturn(models, sequelize));
  
    router.post('/entrada/devolucion/crear', auth, isAdmin, createReturn(models, sequelize));
  
    router.post('/entrada/devolucion/:id', auth, isAdmin, updateReturn(models, sequelize));
  
    router.post('/entrada/devolucion/:id'.auth, isAdmin, deleteReturn(models, sequelize));
  };
  