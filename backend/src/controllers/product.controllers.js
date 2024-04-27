import axios from 'axios';
export const getProducts = async (req, res, next) => {
  try {
    const response = await axios.get('https://dummyjson.com/carts');
    res.json(response.data);
    next()
  } catch (err) {
    res.status(500).send({ err: 'Error obteniendo productos' });
  }

};