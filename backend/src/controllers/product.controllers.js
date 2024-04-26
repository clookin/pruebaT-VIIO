import axios from 'axios';
export const getProducts = async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/carts');
    res.json(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Error obteniendo productos' });
  }
};