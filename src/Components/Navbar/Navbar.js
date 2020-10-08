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
} from "./Navbar.components";

export default function Navbar({cartItems}) {
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
        <NavLink to="/cart"><CartIcon /></NavLink>
        {
          cartItems.length && 
          <ItemsCount>{cartItems.length}</ItemsCount>
        }
      </CartSpan>
    </Nav>
  )
}