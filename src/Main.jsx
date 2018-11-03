import React, { Component } from "react"
import { Route, HashRouter } from "react-router-dom"
import Home from "./components/Home"
import Products from "./components/Products"
import Header from "./components/Header"
import API from "./utils/api"

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      query: "",
      results: []
    }
  }
  async componentDidMount() {
    const results = await API.getItems()
    this.setState({ results })
  }
  getInfo = () => {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=escalada`)
    .then(results => {
      return results.json()
    })
    .then(data => { 
      const filtered = data.results.filter(el => { 
        return el.title.toLowerCase().includes(this.state.query.toLowerCase() || !this.state.query)
      })
      this.setState({ results: filtered })
    })
  }
  handleInputChange = (event) => {
    this.setState({
      query: event.target.value
    }, () => {
      if (this.state.query) {
        this.getInfo()
      } 
    })
  }
  handleOpenModal = () => {
    this.setState({ showModal: true })
  }
  handleCloseModal = () => {
    this.setState({ showModal: false })
  }
  render = () => {
    return (
      <HashRouter>
        <div>
          <Header handleOpenModal={this.handleOpenModal} showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} handleInputChange={this.handleInputChange} />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/products" render={props => <Products results={this.state.results} />} />
          </div>
        </div>
      </HashRouter>
    )
  }
}
 
export default Main