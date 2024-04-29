import { MdStar } from "react-icons/md";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./CSS/ViewProduct.css";
import Navbar from "../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
const ViewProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
    <Navbar/>
    <Button className="btn-back bg-black" onClick={() => navigate(-1)}>Retroceder</Button>
      <article className="container-product-view">
        <div className="p-3 max-w-7xl container-product-content">
          <section className=" container-product-info">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-6 h-max">
                {/* Product Image */}
                <figure className="overflow-hidden rounded-xl">
                  <img
                    src={product.thumbnail}
                    alt="Product-Image"
                    className="image-products"
                  />
                </figure>
                {/* Product Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    {/* Product Title */}
                    <h1 className="text-3xl text-red-500 font-semibold sm:text-4xl">
                      {product.title}
                    </h1>
                    {/* Product Description */}
                    <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                      {product.description}
                    </p>
                    {/* Star Ratings */}
                    <span className="my-3 text-xl text-yellow-600 flex items-center gap-1 sm:my-4">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <MdStar key={index} />
                      ))}
                    </span>
                    {/* Product Price */}
                    <span className="text-xl  font-semibold sm:text-2xl">
                      Precio del producto: ${product.price}
                    </span>
                  </div>
                  {/* Quantity Input and Order Button */}
                  <div className=" ">
                    <form className="text-left flex flex-col gap-2 w-full">
                      {/* Quantity Label */}
                      <label className="font-semibold">Cantidad</label>
                      {/* Quantity Input */}
                      <input
                        className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                        type="number"
                        defaultValue="1"
                        required
                      />
                    </form>
                    {/* Order Button */}
                    <div className="w-full text-left my-4">
                      <button
                        className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white text-md font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
                        title="Confirm Order"
                        disabled={true}
                      >
                        <span>Agregar al carrito</span>
                        <HiOutlineArrowCircleRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default ViewProduct;
