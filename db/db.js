const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "digital_skills",
  connectionLimit: 5,
});
module.exports = pool;