import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const ItemContainer = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  width: 200px;
  height: 200px;
  border: 1px solid lightblue;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h3`
  text-align: center;
`;
export const PriceLabel = styled.button`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  border: none;
  border-radius: 4px;
  background: ${({ clicked }) => (clicked ? "lightgray" : "burlywood")};
  transition: all 0.3s ease;

  &:active,
  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    border: ${({ clicked }) => (clicked ? "" : "1px solid black")};
    cursor: ${({ clicked }) => (clicked ? "default " : "pointer")};
  }
`;

export const Bold = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
`;

export const BuyButton = styled(FaShoppingCart)`
  font-size: 1.3rem;
`;
