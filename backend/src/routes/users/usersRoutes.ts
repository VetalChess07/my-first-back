import express from 'express';
import { getUsers, createUser } from '../../controllers/users/userController.js';

const usersRouter = express.Router();

// Маршруты для работы с пользователями
usersRouter.get('/users', getUsers);
usersRouter.post('/create-user', createUser);

export default usersRouter;
