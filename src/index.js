import React from "react"
import ReactDOM from "react-dom"
import Main from "./Main"
import "./index.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons"

library.add(faShoppingBasket)
 
ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
)