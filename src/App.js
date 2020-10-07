import React from 'react';
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
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={ShoppingCart} />
      </Container>
    </Router>
  );
}

export default App;
