import axios from 'axios'
import Navbar from '../Components/Navbar/Navbar.jsx'

const Products = () => {
  
  const token = localStorage.getItem("token");

  
  axios.get('http://localhost:3000/api/products',{
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
  
  return (
    <>
    <Navbar/>
    <div>Products</div>
    </>
  )
}

export default Products