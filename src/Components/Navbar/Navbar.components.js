import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: black;
`

export const NavMenu = styled.ul`
  display: flex;
  padding: .5rem;
  list-style: none;
  display: flex;
`

export const NavItem = styled.li`
  margin: 0 .25rem;
  color: white;
`
export const CartIcon = styled(FaShoppingCart)`
  font-size: 1.5rem;
  margin-left: auto;
  color: white;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.4rem;
`