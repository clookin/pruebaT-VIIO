import PropTypes from 'prop-types';
import './Item.css'
import { useNavigate } from 'react-router-dom';

const Item = ({data}) => {
  const navigate = useNavigate();
  return (
    <div className='item' onClick={()=> navigate(`/products/${data.id}`)}>
      <img src={data.thumbnail} alt=""/>
        <strong>{data.title}</strong>
      <div className='item-info'>
        <p>Precio: ${data.price}</p>
        <button>Ver Producto</button>
      </div>
    </div>
  )
}
Item.propTypes = {
  data: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id:PropTypes.number.isRequired,
  }).isRequired,
};


export default Item