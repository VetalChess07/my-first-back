import { Request, Response } from 'express';
import { getAllUsers } from '../../services/users/getAllUsers.js';
import { createNewUser } from '../../services/users/createNewUser.js';
import { User } from '../../services/users/types.js';
// Получение списка всех пользователей
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();  // Вызываем сервис для получения данных
    res.status(200).json(users);  // Отправляем пользователей в ответ
  } catch (err) {
    res.status(500).json({ error: 'Не удалось получить пользователей' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const data:User = req.body
    if(!data || !data.email || !data.password || !data.username) throw new Error('Не корректные данные о пользоветели')

    const user = await createNewUser(data);  // Вызываем сервис для получения данных
    res.status(201).json({message:"sucesses", data:user});  // Отправляем пользователей в ответ
  } catch (err) {
    res.status(500).json({ error: 'Не удалось получить пользователей нового пользоветля возможно неверные даные' });
  }
};

