const { getAll } = require('../../../controllers/Core/getData');
module.exports = (router, models, auth) => {
  router.get('/proveedores/', auth, getAll(models, 'proveedor'));

  return router;
};
