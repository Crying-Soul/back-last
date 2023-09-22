const db = require("../db/db");

class Plan {
  async createAssocUser(user_id) {
    return (
      await db.query(
        "INSERT INTO user_plan (`user_id`, `plan_id`, `from`, `to`, `price`) VALUES (?,DEFAULT,DEFAULT,DEFAULT,DEFAULT) RETURNING *;",
        [user_id]
      )
    )[0];
  }
  async getAll(){
    return (
        await db.query(
          "SELECT * FROM plans"
        )
      )
  }
  async getById(user_id){
    return (await db.query("SELECT * FROM user_plan WHERE user_id=?", [user_id]))[0]
}
  async update(user_id, sql_string) {
    await db.query("UPDATE user_plan SET " + sql_string + " WHERE user_id =?;", [
      user_id,
    ]);
    // console.log(user_id, await this.getById(user_id));

    return await this.getById(user_id);
  }
}

module.exports = new Plan();
