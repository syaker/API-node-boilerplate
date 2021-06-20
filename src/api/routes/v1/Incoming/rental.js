const {
  getRental,
  getAnRental,
  createRental,
  updateRental,
  deleteRental,
} = require('../../../controllers/Incoming/rentalController');

module.exports = (router, models, auth, isAdmin, sequelize) => {
  router.get('/entrada/alquiler/listar', auth, getRental(models, sequelize));

  router.get('/entrada/alquiler/listar/:id', auth, getAnRental(models, sequelize));

  router.post('/entrada/alquiler/crear', auth, isAdmin, createRental(models, sequelize));

  router.post('/entrada/alquiler/editar/:id', auth, isAdmin, updateRental(models, sequelize));

  router.post('/entrada/alquiler/eliminar/:id'.auth, isAdmin, deleteRental(models, sequelize));
};
