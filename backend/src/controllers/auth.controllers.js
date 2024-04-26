// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import User from '../models/user.model.js'; 

// class AuthService {
//   static async auth(credentials) {
//     try {
//       const { email, password } = credentials;
//       const user = await User.findOne({ email });

//       if (user && bcrypt.compareSync(password, user.password)) {
//         return { isValid: true, user };
//       } else {
//         return { isValid: false };
//       }
//     } catch (error) {
//       throw error;
//     }
//   }

//   static getToken(user) {
//     const payload = { id: user.id, email: user.email };
//     const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1d' });
//     return token;
//   }
// }

// const authController = {
//   async login(req, res) {
//     const { email, password } = req.body;
//     const { isValid, user } = await AuthService.auth({ email, password });

//     if (isValid) {
//       const token = AuthService.getToken(user);
//       res.send({ status: 'OK', data: { token } });
//     } else {
//       res.status(401).send({ status: 'Error', message: 'Credenciales inválidas' });
//     }
//   },
// };

// export default authController;
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js'; 

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (user && bcrypt.compareSync(password, user.password)) {
//       const payload = { id: user.id, email: user.email };
//       const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1d' });
//       res.send({ status: 'OK', data: { token } });
//     } else {
//       res.status(401).send({ status: 'Error', message: 'Credenciales inválidas' });
//     }
//   } catch (error) {
//     res.status(500).send({ error: 'Error iniciando sesión' });
//   }
// };
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      const payload = { id: user.id, email: user.email };
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1d' });
      res.send({ status: 'OK', data: { token } });
    } else {
      res.status(401).send({ status: 'Error', message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).send({ error: 'Error logging in', details: error.message });
  }
};