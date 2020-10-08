import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const ItemContainer = styled.div`
  margin: .5rem;
  padding: .5rem;
  width: 200px;
  height: 200px;
  border: 1px solid lightblue;
  display: flex;
  flex-direction: column;
`

export const Header = styled.h3`
  text-align: center;
`
export const PriceLabel = styled.button`
  margin-top: auto;
  display: flex;  
  align-items: center;
  justify-content: center;
  padding: .5rem 0;
  border: none;
  border-radius: 4px;
  background: ${({clicked}) => (clicked ? "lightgray" : "burlywood")};
  color: white;

  &:active, &:focus {
    border: none;
    outline: none;
  }

`

export const Bold = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
`

export const BuyButton = styled(FaShoppingCart)`
  font-size: 1.3rem;
`
