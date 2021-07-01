const { getUserMeucci2 } = require('../../../controllers/Users/userController');

module.exports = (router, models, auth) => {
  router.get('/user/:dni', auth, getUserMeucci2(models));

  return router;
};
