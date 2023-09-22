const db = require("../db/db");
const User = require("./User");
class Company {
  async create() {
    return (
      await db.query(
        "INSERT INTO companies (name, phone, address) VALUES (DEFAULT,DEFAULT,DEFAULT) RETURNING *;"
      )
    )[0];
  }
  async getById(id) {
    return (await db.query("SELECT * FROM companies WHERE id=?", [id]))[0];
  }
  async update(user_id, sql_string) {
    const user = await User.getById(user_id);
    await db.query("UPDATE companies SET " + sql_string + " WHERE id =?;", [
      user.company_id,
    ]);
    return this.getById(user.company_id);
  }
}

module.exports = new Company();
