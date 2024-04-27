// import express from 'express'
// import path from 'path'
// import dotenv from 'dotenv'
// import connectMongo from './src/config/baseDatos.js';
// import userRouter from './src/routes/user.routes.js';
// import authRoute from './src/routes/auth.routes.js';
// import productRouter from './src/routes/product.routes.js';


// const app = express();
// const PORT = 3000;
// dotenv.config();
// connectMongo();
// // Middleware formatear las peticiones a JSON
// app.use(express.json());
// app.use('/api',userRouter);
// app.use('/api',authRoute);
// app.use('/api',productRouter);

// app.get('/', (req, res) => {
//   res.status(200).json({
//     status: "Respuesta exitosa",
//   })
// });
// app.listen(PORT, ()=>{console.log("El servidor se esta escuchando en el puerto" + PORT)});
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
import connectMongo from './src/config/baseDatos.js';
import userRouter from './src/routes/user.routes.js';
import authRoute from './src/routes/auth.routes.js';
import productRouter from './src/routes/product.routes.js';

const app = express();
const PORT = 3000;
dotenv.config();
connectMongo();

//middleware para CORS
app.use(cors({
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'] 
}));

// Middleware formatear las peticiones a JSON
app.use(express.json());
app.use('/api',userRouter);
app.use('/api',authRoute);
app.use('/api',productRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    status: "Respuesta exitosa",
  })
});

app.listen(PORT, ()=>{console.log("El servidor se esta escuchando en el puerto" + PORT)});