import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { Link as RouteLink } from "react-router-dom";

export const CartTable = styled.div`
  margin: auto;
  display: table;
  border-collapse: collapse;
  min-width: 300px;
  width: 70%;
`;

export const CartContainer = styled.div`
  display: flex;
`;

export const CartRow = styled.div`
  display: table-row;
  position: relative;
  border-bottom: 1px solid black;

  &:last-of-type {
    border: none;
  }
`;

export const CartData = styled.div`
  display: table-cell;
  position: relative;
  padding: 1.5rem 1.5rem;
  font-size: 1.5rem;
  user-select: none;
`;

export const CartHeader = styled.h3``;

export const Link = styled(RouteLink)`
  text-decoration: none;
  font-size: 1.2em;
`;

export const DeleteDiv = styled.span``;

export const DeleteIcon = styled(FaTrash)`
  color: lightgray;
  position: absolute;
  left: 0;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;


export const LinkButton = styled(Link)`
  padding: .375rem 1rem;
  background: lightskyblue;
  text-decoration: none;
  color: white;
  text-align: center;
`