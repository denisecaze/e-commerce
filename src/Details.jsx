import React from "react"
import Modal from "react-modal"

class Details extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      query: 1,
      quantity: 0,
      totalItems: 0,
      totalPrice: 0,
      added: false
    }
    
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.send = this.send.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }
  
  handleOpenModal () {
    this.setState({ showModal: true })
  }
  
  handleCloseModal () {
    this.setState({ showModal: false })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  increment(e) {
    e.preventDefault()
    
    this.setState({
      query: Number(this.state.query) + 1
    })
  }

  decrement(e) {
    e.preventDefault()

    if (this.state.query <= 1) {
      return this.state.query
    } else {
      this.setState(
        prevState => ({
          query: Number(prevState.query) - 1
        })
      )
    }
  }

  send(e) {
    this.setState({
      quantity: Number(this.state.quantity) + parseInt(this.state.query),
      totalPrice: ((Number(this.state.quantity) + parseInt(this.state.query)) * this.props.price)
    })

    this.setState({
      added: true
    },
      function() {
        setTimeout(() => {
          this.setState({
            added: false,
            selectedProduct: {}
          });
        }, 1500)
      })

    if (Number(this.state.quantity) + parseInt(this.state.query) >= 1) {
      this.setState({
        totalItems: 1
      })
    }

    e.preventDefault()

    let item = {
      id: this.props.id,
      image: this.props.image,
      title: this.props.title,
      price: this.props.price,
      quantity: Number(this.state.quantity) + parseInt(this.state.query),
      totalPrice: ((Number(this.state.quantity) + parseInt(this.state.query)) * this.props.price)
    }

    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", "[]") 
    }

    let cart = JSON.parse(localStorage.getItem("cart"))
    cart.forEach((el, index) => {
      if(el.id === item.id) {
        cart.splice(index, 1)
      }
    })
    cart.push(item) 
    localStorage.setItem("cart", JSON.stringify(cart)) 
  }

  render () {
    return (
      <React.Fragment>
        <button className="modal-buttons" onClick={this.handleOpenModal}>Detalhes</button>
        <Modal style={{ overlay: { background: 'rgba(255, 255, 255, 0)', height: "68%", top: "16%", bottom: "16%", width: "60%", marginLeft: "20%", marginRight: "20%"}}} isOpen={this.state.showModal} contentLabel="onRequestClose Example">
          <header>
            <button className="modal-buttons" onClick={this.handleCloseModal}>Close</button>
          </header>
          <hr/>
          <div className="details">
            <img className="details-product-image" src={this.props.image} alt="Imagem do produto" />
            <div className="details-description">
              <p><span className="span">Ref: </span>{this.props.id}</p> 
              <p><span className="span">Descrição: </span>{this.props.title}</p> 
            </div>
              <div className="details-select-and-add">
                <p className="details-product-price">R${this.props.price}</p>
                <div>
                <a href="#" className="decrement" onClick={this.decrement}>–</a>
                <input className="quantity" type="number" ref={input => this.search = input} onChange={this.handleInputChange} value={this.state.query}/>
                <a href="#" className="increment" onClick={this.increment}>+</a>
                </div>
                <button className={!this.state.added ? "not-added-button" : "add-button"}  onClick={this.send}>{!this.state.added ? "Adicionar ao carrinho" : "✔ Adicionado"}</button>
              </div>
            </div>
          <hr/>
        </Modal>
      </React.Fragment>
    )
  }
}

export default Details
