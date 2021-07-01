const { sendMail } = require('../../../controllers/Tools/sendMailController');

module.exports = (router, models, auth) => {
  router.post('/send-mail', auth, sendMail());

  return router;
};
