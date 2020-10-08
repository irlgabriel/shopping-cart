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
  CloseButton
} from "./Navbar.components";

export default function Navbar({cartItems}) {
  const [cartHovered, setHover] = useState(false);
  function hoverHandler(e) {
    setHover(true);
  }
  function dismissDropdown(e) {
    e.stopPropagation()
    setHover(false);
  }
  return(
    <Nav>
      <NavMenu>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/cart">Checkout</NavLink>
        </NavItem>    
      </NavMenu>
      <CartSpan>
        <NavLink to="/cart"><CartIcon onMouseOver={hoverHandler} /></NavLink>
        {
          cartItems.length && 
          <ItemsCount>{cartItems.length}</ItemsCount>
        }
        <CartDropdown cartHovered={cartHovered}>
          <CloseButton onClick={dismissDropdown}/>
        </CartDropdown>
      </CartSpan>
    </Nav>
  )
}