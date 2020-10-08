import React, { useState } from "react";

// Importing Styled Components
import {
  Nav,
  CartIcon,
  NavMenu,
  NavItem,
  NavLink,
  CartSpan,
  ItemsCount,
  CartDropdown,
  CloseButton,
  HeaderDropdown,
  ItemDropdown,
  PriceDropdown,
  LinkButton,
} from "./Navbar.components";

export default function Navbar({ 
  cartItems,
  setItems,
}) {
  const [cartClicked, setClicked] = useState(false);
  function clickHandler(e) {
    setClicked(!cartClicked);
  }
  function dismissDropdown(e) {
    e.stopPropagation();
    setClicked(false);
  }
  return (
    <Nav>
      <NavMenu>
        <NavItem>
          <NavLink onClick={dismissDropdown} to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={dismissDropdown} to="/cart">Checkout</NavLink>
        </NavItem>
      </NavMenu>
      <CartSpan>
        <CartIcon onClick={clickHandler} />
        {cartItems.length && <ItemsCount>{cartItems.length}</ItemsCount>}
        <CartDropdown cartClicked={cartClicked}>
          <HeaderDropdown>Cart{cartItems.length ? `(${cartItems.length})` : ""}</HeaderDropdown>
          <CloseButton onClick={dismissDropdown} />
          {
            cartItems.map(item => <ItemDropdown><HeaderDropdown>{item.name}</HeaderDropdown><PriceDropdown>${item.price}</PriceDropdown></ItemDropdown>)
          }
          {
            cartItems.length && <LinkButton onClick={dismissDropdown} to="/cart">Checkout</LinkButton>
          }
            </CartDropdown>
      </CartSpan>
    </Nav>
  );
}
