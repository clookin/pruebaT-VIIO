import express from 'express';
import {login} from '../controllers/auth.controllers.js'; 

const authRoute = express.Router();

authRoute.post('/auth/login', login);

export default authRoute;