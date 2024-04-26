import express from 'express';
import { getUsers, getUser, postUser, putUser, deleteUser } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/getUser/:_id', getUser);

userRouter.get('/getUsers', getUsers);

userRouter.post('/register', postUser);

userRouter.put('/updateUser/:_id', putUser);

userRouter.delete('/deleteUser/:_id', deleteUser);

export default userRouter;