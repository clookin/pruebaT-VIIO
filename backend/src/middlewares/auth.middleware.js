import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authenticate = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (bearerToken) {
    const token = bearerToken.split('Bearer ')[1];
    try {
      const decoded = jwt.verify(token, process.env.SECRET, 'HS512');
      next();
    } catch (error) {
      next({
        status: 400,
        errorContent: error,
        message: 'Invalid token',
      });
    }
  } else{
    console.log("No se encontró el token");
    res.status(404).send({ error: 'No se encontró el token' });
  }
  //  (!bearerToken){
  //   res.status("404")
  //   console.log("no se encontro el token");
  //   next(error)
  // };
};

export default authenticate;
