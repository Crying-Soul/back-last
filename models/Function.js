const db = require("../db/db");

class Function {
  
  async getAll(){
    return (
        await db.query(
          "SELECT * FROM functions"
        )
      )
  }
  async removeForUser(user_plan_id){
    return await db.query("DELETE FROM user_plan_functions WHERE user_plan_id=?", [user_plan_id])
  }
  async create(user_plan_id, function_id){
    return await db.query("INSERT INTO user_plan_functions (user_plan_id, function_id) VALUES (?,?)", [user_plan_id, function_id])
  }
  async userFuncs(user_plan_id){
    return (
      await db.query(
        "SELECT * FROM user_plan_functions WHERE user_plan_id = ?", [user_plan_id]
      )
    )
  }
}

module.exports = new Function();
