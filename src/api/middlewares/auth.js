const jwt = require('jsonwebtoken');
const { secret } = require('../config/config');

module.exports = (req, res, next) => {
  const { token } = req.cookies;

  if ((!token || token) && req.url === '/auth') return next();

  jwt.verify(token, secret, (err) => {
    if (err) {
      console.log(err);
      return res.sendStatus(401)
    }
    next();
  });
};
