const db = require("../db/db");

class Bot{
    async createAssocUser(user_id){
        const bot = (await db.query('INSERT INTO bots (name, logo, status, coin_logo, coin_name, bg_dialog, last_start) VALUES (DEFAULT,DEFAULT,DEFAULT,DEFAULT,DEFAULT,DEFAULT,DEFAULT) RETURNING *;',[user_id]))[0]
        await db.query('INSERT INTO user_bot (user_id, bot_id) VALUES (?,?)', [user_id, bot.id])
        return bot;
    }
    async getById(bot_id){
        return (await db.query("SELECT * FROM bots WHERE id=?", [bot_id]))[0]
    }
    async update(bot_id, sql_string){
        
        await db.query("UPDATE bots SET " + sql_string + " WHERE id =?;", [bot_id] );
        return this.getById(bot_id);

    }
    async getAllByUser(user_id){
        return await db.query("SELECT bots.* FROM bots LEFT JOIN user_bot ON user_bot.bot_id = ?;", [user_id])
    }
}

module.exports = new Bot();