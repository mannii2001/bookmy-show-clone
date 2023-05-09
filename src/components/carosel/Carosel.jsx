import React, { useEffect, useState } from 'react'
import logo1 from "../../Assets/poster1.jpg"
import logo2 from "../../Assets/poster2.jpg"
import logo3 from "../../Assets/poster3.jpg"
import logo4 from "../../Assets/poster4.jpg"
import './carosel.css'

const Carosel = () => {
    //Logic for changing the poster after every 2.5 seconds
    // let count = 0;
    // eslint-disable-next-line
    const images = [logo1,logo2,logo3,logo4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [currentImageIndex, images]);
  


  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  

      <img className="d-block w-100" src={images[currentImageIndex]} alt="posters" />
    
   
</div>
  )
}

export default Carosel
