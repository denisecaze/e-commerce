import React from "react"
import { Carousel } from "react-responsive-carousel"
import pic1 from "./assets/images/oferta01.png"
import pic2 from "./assets/images/oferta02.png"
import pic3 from "./assets/images/oferta03.png"

export default () => (
  <Carousel autoPlay>
    <div>
      <img src={pic1} alt="Imagem da oferta 01" />
      <p className="legend">Oferta 01</p>
    </div>
    <div>
      <img src={pic2} alt="Imagem da oferta 02" />
      <p className="legend">Oferta 02</p>
    </div>
    <div>
      <img src={pic3} alt="Imagem da oferta 03" />
      <p className="legend">Oferta 03</p>
    </div>
  </Carousel>
)
