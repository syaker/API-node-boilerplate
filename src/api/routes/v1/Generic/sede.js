const { getAll } = require('../../../controllers/Core/getData');
module.exports = (router, models, auth) => {
  router.get('/sede/', auth, getAll(models, 'sede'));

  return router;
};
