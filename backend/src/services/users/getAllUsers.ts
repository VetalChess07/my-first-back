import pool from "../../config/postgres.js";

import { GET_ALL_USERS } from "./queries.js";

export async function getAllUsers() {
    try {
      const result = await pool.query(GET_ALL_USERS);
      return result.rows; // Возвращаем только данные пользователей
    } catch (err) {
      console.error('Error fetching users:', err);
      throw new Error('Не удалось получить пользователей');
    }
  }