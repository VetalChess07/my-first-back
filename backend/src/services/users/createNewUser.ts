import pool from "../../config/postgres.js"; // подключаем пул подключений

import type { User } from "./types.js";

export async function createNewUser(userData:User){
   
    try {
        const {username, email, password} = userData
        const result = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
            [username, email, password]
          );
          console.log(result)

        return result.rows[0]
    }
    catch(err){
        console.error('Error creating user:', err);
        throw new Error('Не удалось создать пользователя');
    }
}