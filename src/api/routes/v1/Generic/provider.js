const { getAll } = require('../../../controllers/Core/queryMethodsController');
module.exports = (router, models, auth) => {
  router.get('/proveedores/', auth, getAll(models, 'proveedor'));

  return router;
};
