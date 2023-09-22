const db = require("../db/db");

class User {
  async getAll() {
    return await db.query(`SELECT * FROM users;`);
  }
  async getById(user_id) {
    return (await db.query("SELECT * FROM users WHERE id=?", [user_id]))[0];
  }

  async createUser(name, email, password, company_id) {
    return (
      await db.query(
        `INSERT INTO users (name, email, password, company_id) VALUES (?,?,?,?) RETURNING *;`,
        [name, email, password, company_id]
      )
    )[0];
  }
  async findOne(email) {
    return (
      (await db.query(`SELECT * FROM users WHERE email=?;`, [email]))[0] || null
    );
  }
  async updateToken(email, token) {
    return await db.query(`UPDATE users SET token = ? WHERE email = ?;`, [
      token,
      email,
    ]);
  }
  async findByToken(token) {
    return (await db.query(`SELECT * FROM users WHERE token=?;`, [token]))[0];
  }
  async update(user_id, sql_string) {
    await db.query("UPDATE users SET " + sql_string + " WHERE id =?;", [
      user_id,
    ]);
    return this.getById(user_id);
  }
}

module.exports = new User();
