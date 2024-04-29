import axios from "axios"
import { useEffect, useState } from "react"
import Item from "../Item/Item"
import './ProductsCall.css'


const ProductsCall = () => {
  // Estados para manejar los productos, categorías, búsqueda y filtro
  const [valor, setValor] = useState('todos');
  const [search,setSearch] = useState("")
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Llamadas a la API para obtener los productos y las categorías al cargar el componente
  useEffect(()=>{
    axios.get('https://dummyjson.com/products?limit=20&skip=4&select=title,price,category,description,thumbnail,id,rating')
    .then(res=>setProducts(res.data.products))
    .catch(err=>console.log(err));

    axios.get("https://dummyjson.com/products/categories")
    .then(res => {
      setCategories(res.data)
    })
    .catch(err=> console.log(err))
  },[])

  // Funciones para manejar los cambios en los filtros y la búsqueda
  const handleChange = (e)=>{
    setValor(e.target.value);
  }
  const handleSearch = (e) =>{
    setSearch(e.target.value)
  }

  return (
    <>
      <main className="main-productos">
      <form className="search-input">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required onChange={handleSearch}/>
        <button type="submit" className="btn-search-bar text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
        <section className="productos_seccion-filtro">
          <div className="seccion-filtro">
            <div>
              <h5>Estos son nuestos productos, puedes filtrar segun lo que estes buscando</h5>
            </div>
            <select name="select" id="select" onChange={handleChange}>
              <option value="todos">Todos</option>
              {
                categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))
              }
            </select>
          </div>
        </section>
        <section className="productos_seccion-productos">
        {products.filter(item => (item.category === valor || valor === 'todos') && item.title.toLowerCase().includes(search.toLowerCase())).map((item) => (
            <Item
              key={item.id}
              data={item}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default ProductsCall