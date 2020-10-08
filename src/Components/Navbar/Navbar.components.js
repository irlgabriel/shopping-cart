import styled from "styled-components";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: black;
`;

export const NavMenu = styled.ul`
  display: flex;
  padding: 0.5rem;
  list-style: none;
  display: flex;
`;

export const NavItem = styled.li`
  margin: 0 0.25rem;
  padding: 0.25rem 0.75rem;
  border: 1px solid lightskyblue;
  border-radius: 5px;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    border-radius: 1px solid #101522;
    background: lightskyblue;
  }
`;
export const CartIcon = styled(FaShoppingCart)`
  font-size: 1.5rem;
  color: white;
  z-index: 2;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.4rem;
`;

export const CartSpan = styled.div`
  position: relative;
  margin-left: auto;
  display: inline-block;
  width: 2rem;
  position: relative;
`;
export const ItemsCount = styled.span`
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
  color: white;
  padding: 0.125rem 0.375rem;
  border-radius: 50%;
  background: lightcoral;
  z-index: 1;
`;

export const CartDropdown = styled.div`
  overflow: hidden;
  position: absolute;
  right: ${({ cartClicked }) => (cartClicked === true ? "0px" : "-800%")};
  top: 50px;
  border: 1px solid lightskyblue;
  min-width: 200px;
  min-height: 400px;
  padding: 0.5rem;
  padding-top: 2.5rem;
  background: #101522;
  transition: all 0.5s ease;
`;

export const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
`;
export const ItemDropdown = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightskyblue;
  padding: .5rem 0;
  &:last-of-type {
    border-bottom: none;
    margin-bottom: 1rem;
  }
`
export const HeaderDropdown = styled.h3`
  text-align: center;
  color: white;
`

export const PriceDropdown = styled.span`
  color: white;
`

export const LinkButton = styled(Link)`
  padding: .375rem .75rem;
  background: lightskyblue;
  text-decoration: none;
  color: white;
`

