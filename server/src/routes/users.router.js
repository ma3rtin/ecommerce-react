import { Router } from "express";
import { getUsers, getUserById, saveUser } from '../controllers/user.controller.js'

const usersRouter =  Router();


usersRouter.get('/', getUsers);
usersRouter.post('/', saveUser);
usersRouter.get('/:uid', getUserById);

export default usersRouter; 