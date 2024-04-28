import axios from 'axios'
import Navbar from '../Components/Navbar/Navbar.jsx'
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './CSS/CheckOut.css'
const CheckOut = () => {
  // Estado para almacenar los productos en el carrito
  const [cart, setCart] = useState([]);
  // Obtiene el token del almacenamiento local
  const token = localStorage.getItem("token");
  // Hook de navegación
  const navigate = useNavigate();
  
  // Llamada a la API para obtener los productos al cargar el componente
  useEffect(()=>{
    axios.get('http://localhost:3000/api/products',{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      console.log(res);
      setCart(res.data.carts); 
    })
    .catch(err=>console.log(err))
  },[token])
  
  return (
    <>
    <Navbar/>
    <div className="py-20">
        <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
          <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
            <table className="min-w-full bg-white dark:bg-gray-800">
              <thead>
                <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    <div className="text-gray-600 dark:text-gray-400 opacity-0 cursor-default relative w-10">
                      <div className="absolute top-0 right-0 w-5 h-5 mr-2 -mt-1 rounded-full bg-indigo-700 text-white flex justify-center items-center text-xs">
                        3
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-file"
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                      </svg>
                    </div>
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    # Orden
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Descuento
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Id Comprador
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Total Productos
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Total
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    <div className="opacity-0 w-2 h-2 rounded-full bg-indigo-400" />
                  </th>
                </tr>
              </thead>
              <tbody>
    {cart.map((e) => (
      <tr onClick={()=> navigate(`/checkout/${e.id}`)} key={e.id} className="map-order h-24 border-gray-300 dark:border-gray-200 border-b">
        <td className="text-xs sm:text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"></td>
        <td className="text-xs sm:text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
          #{e.id}
        </td>
        <td className="text-xs sm:text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
          ${e.discountedTotal}
        </td>
        <td className="text-xs sm:text-sm pr-6 whitespace-no-wrap">
          <p>#{e.userId}</p>
        </td>
        <td className="text-xs sm:text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
          {e.totalProducts}
        </td>
        <td className="text-xs sm:text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
          {e.total}
        </td>
      </tr>
    ))}
  </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckOut