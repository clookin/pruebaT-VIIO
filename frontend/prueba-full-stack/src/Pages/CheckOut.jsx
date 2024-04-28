import axios from 'axios'
import Navbar from '../Components/Navbar/Navbar.jsx'
import { useEffect } from 'react';

const CheckOut = () => {
  
  const token = localStorage.getItem("token");

  useEffect(()=>{
    axios.get('http://localhost:3000/api/products',{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  },[token])
  
  return (
    <>
    <Navbar/>
    <div>Products</div>
    </>
  )
}

export default CheckOut