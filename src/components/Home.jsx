import React, { Component } from "react"
import Carousel from "./Carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

class Home extends Component {

  render() {
    return (
      <div className="carousel">
        <Carousel/>
      </div>
    )
  }
}
 
export default Home

