import React, { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// Importing Styled Components
import { Container, GlobalStyle } from "./globalStyles";

// Importing Functional Components
import { Home, Navbar, ShoppingCart } from "./Components";

function App() {
  const [cartItems, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [showMessage, setMessage] = useState(false);
  return (
    <Router>
      <GlobalStyle />
      <Navbar cartItems={cartItems} />
      <Container>
        <Route
          path="/"
          exact
          render={() => (
            <Home
              showMessage={showMessage}
              total={total}
              setTotal={setTotal}
              cartItems={cartItems}
              setItems={setItems}
            />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <ShoppingCart
              showMessage={showMessage}
              total={total}
              setTotal={setTotal}
              cartItems={cartItems}
              setItems={setItems}
            />
          )}
        />
      </Container>
    </Router>
  );
}

export default App;
