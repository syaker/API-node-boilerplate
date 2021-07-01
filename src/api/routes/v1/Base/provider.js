const { getAll } = require('../../../controllers/Tools/queryController');
module.exports = (router, models, auth) => {
  router.get('/proveedores/', auth, getAll(models, 'proveedor'));

  return router;
};
