const { getAll } = require('../../../controllers/Tools/queryController');
module.exports = (router, models, auth) => {
  router.get('/sede/', auth, getAll(models, 'sede'));

  return router;
};
