import React, { useState } from "react";

// Importing Styled Components 
import {
  Nav,
  CartIcon,
  NavMenu,
  NavItem,
  NavLink
} from "./Navbar.components";

export default function Navbar() {
  const []
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
      <CartIcon />
    </Nav>
  )
}