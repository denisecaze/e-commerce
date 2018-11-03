import React, { Component } from "react"

class Search extends Component {
  render = () => {
    return (
      <input className="search-field" placeholder="O que procuras?" onChange={this.props.handleInputChange} />
    )
  }
}

export default Search
