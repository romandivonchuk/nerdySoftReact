import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {StoreContext} from "./storeContext"
import { myStore } from "./store"
import {
  BrowserRouter as Router,
  
} from "react-router-dom";

const Index = () => {
  return (
    <StoreContext.Provider value={myStore}>
      <App/>
    </StoreContext.Provider>
  
  )
}

ReactDOM.render(<Index/>, document.getElementById('root'))

