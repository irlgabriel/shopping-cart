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
  padding: .25rem .75rem;
  border: 1px solid lightskyblue;
  border-radius: 5px;
  color: white;
  transition: all .3s ease;

  &:hover {
    border-radius: 1px solid #101522;
    background: lightskyblue;
  }
`
export const CartIcon = styled(FaShoppingCart)`
  font-size: 1.5rem;
  color: white;
  z-index: 2;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.4rem;
`

export const CartSpan = styled.div`
  margin-left: auto;
  display: inline-block;
  width: 2rem;
  position: relative;
`
export const ItemsCount = styled.span`
  position: absolute;
  bottom: -.5rem;
  right: -.5rem; 
  color: white;
  padding: .125rem .375rem;
  border-radius: 50%;
  background: lightcoral;
  z-index: 1;
`