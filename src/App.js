import "./global.scss";
import Cart from "./Pages/Cart";
import Home from "./Pages/Index";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
   
} from "react-router-dom";
 
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/carrinho" element={<Cart/>}>
          
          </Route>
        </Routes>
    </Router>
   
    );
}

export default App;
