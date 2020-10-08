import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Importing Styled Components
import {
  Container, 
  GlobalStyle
} from './globalStyles'

// Importing Functional Components
import {
  Home, 
  Navbar, 
  ShoppingCart
} from "./Components";

function App() {
  const [cartItems, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <Router>
      <GlobalStyle />
      <Navbar cartItems={cartItems}/>
      <Container>
        <Route path="/" exact render={() => (<Home total={total} setTotal={setTotal} cartItems={cartItems} setItems={setItems}/>)} />
        <Route path="/cart" render={() => (<ShoppingCart total={total} setTotal={setTotal} cartItems={cartItems} setItems={setItems}/>)} />
      </Container>
    </Router>
  );
}

export default App;
