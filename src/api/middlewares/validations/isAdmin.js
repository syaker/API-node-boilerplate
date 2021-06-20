const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { token } = req.cookies;

  const decode = jwt.decode(token, { complete: true});

  if (!decode.payload.role || decode.payload.role !== "admin") return next(403);

  next();
};
