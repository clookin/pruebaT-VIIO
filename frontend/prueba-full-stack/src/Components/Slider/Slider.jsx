import { Carousel } from "flowbite-react";
import './Slider.css'
import img1 from '../../assets/Slider/imagen_slider1.jpeg'
import img2 from '../../assets/Slider/imagen_slider2.jpeg'
import img3 from '../../assets/Slider/imagen_slider3.jpeg'
const Slider = () => {
  return (
  <>
  <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 slider-container-mobile">
      <Carousel className="carousel-slider">
        <img src={img1} alt="..." />
        <img src={img2} alt="..." />
        <img src={img3} alt="..." />
      </Carousel>
    </div>
  </>
  )
}

export default Slider