import React, { Component } from "react";
import Details from "./Details"

class Products extends Component {
  renderListItem = () => {
    return this.props.results.map((item, index) => <Product {...item} key={index} />)
  }
  render = () => {
    return (
      <div className="container">
        {this.renderListItem()}
      </div>
    )
  }
}

const Product = (props) => {
  return (
    <div className="product-card">
      <img src={props.thumbnail} className="product-card-image" alt="Imagem do produto" />
      <p className="product-card-title">{props.title}</p>
      <p className="product-card-price">R${props.price}</p>
      <Details image={props.thumbnail} title={props.title} price={props.price} id={props.id} />
    </div>
  )
}
 
export default Products


