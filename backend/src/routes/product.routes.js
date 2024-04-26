import express from 'express';
import { getProducts } from '../controllers/product.controllers.js';
import authenticate from '../middlewares/auth.middleware.js';

const productRouter = express.Router();

productRouter.get('/products',authenticate , getProducts);

export default productRouter;