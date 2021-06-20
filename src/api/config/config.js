const secret = process.env.JWT_SECRET;
const port = process.argv[2] || process.env.PORT || 8080;
const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_host = process.env.DB_HOST;
const db_password = process.env.DB_PASSWORD;

module.exports = {
  secret,
  port,
  db_host,
  db_user,
  db_password,
  db_name,
};