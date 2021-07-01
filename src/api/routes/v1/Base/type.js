const { getAllType } = require('../../../controllers/Base/typeController');

module.exports = (router, models, auth, sequelize) => {
  router.get('/tipo/:modo', auth, getAllType(models, sequelize));

  return router;
};
