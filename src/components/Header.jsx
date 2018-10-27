import React from "react"
import Modal from "react-modal"
import { NavLink } from "react-router-dom"
import Search from "./Search"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Item = ({ item }) => 
  <li className="item">
    <div className="cart-item">
      <img className="cart-item-image" src={item.image} alt="Imagem do produto" />
      <p className="cart-item-title">{item.title}</p> 
      <div className="cart-item-total">
        <p className="cart-item-quantity">
          <span className="span">QTD: {item.quantity}</span>
        </p>
        <p className="cart-item-total-price">
          <span className="span">TOT: R${item.totalPrice.toFixed(2)}</span>
        </p>
      </div>
    </div> 
  </li>

const Header = (props) => {
  this.state = {
    items: JSON.parse(localStorage.getItem("cart")) || [] 
  }

  if (this.state.items.length !== 0) {
    let partialTotal = []
    const calculatingTotal = this.state.items.map(item => {
      partialTotal.push(parseInt(item.totalPrice.toFixed(2)))
      return partialTotal
    })
    var finalTotal = calculatingTotal[0].reduce((acum, val) => acum + val).toFixed(2)
  } else {
    finalTotal = 0
  }

  return (
    <React.Fragment>
      <h1 className="logo">CLIMBOX</h1>
      <div className="header">
        <ul className="header-links-items">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
        </ul>
        <div className="header-search-and-cart">
          <Search to="/search" handleInputChange={props.handleInputChange}/>
          <div className="header-cart-button">
            <button className="cart-button" onMouseEnter={props.handleOpenModal}>
              <FontAwesomeIcon className="cart-icon" icon="shopping-basket" />
            </button>
          </div>
        </div>
      </div>
      <Modal className="cart-modal" isOpen={props.showModal} contentLabel="onRequestClose Example" style={ { overlay: { top: 131, left: 900, right: -950, backgroundColor: "rgba(255, 255, 255, 0)" }, content: { top: "30px", left: "30px", right: "30px", bottom: "30px", border: "1px solid #ccc",
      overflow: "auto", WebkitOverflowScrolling: "touch", borderRadius: "4px", outline: "none" } } }>
        <div onMouseLeave={props.handleCloseModal}>
          <ul className="cart-container">{this.state.items.map(item => { 
              return (<Item item={item} key={item.id} />)
              })
            }
          </ul>
          <p className="cart-final-total">TOTAL DA COMPRA: R$ {finalTotal}</p>
          <button className="cart-buy-button">COMPRAR</button>
        </div>
      </Modal>
    </React.Fragment>
  )
}

export default Header