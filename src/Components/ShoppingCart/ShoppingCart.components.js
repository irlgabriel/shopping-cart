import styled from "styled-components";
import { FaTrash }   from "react-icons/fa";
import { Link as RouteLink } from "react-router-dom";

export const CartTable = styled.div`
  margin-left: auto;
  display: table;
  border-collapse: collapse;
`

export const CartContainer = styled.div`
  display: flex;
`

export const CartRow = styled.div`
  display: table-row;
  position: relative;
  border-bottom: 1px solid black;

  &:first-of-type {
    border: none;
  }

`

export const CartData = styled.div`
  display: table-cell;
  position: relative;
  padding: .5rem 1.5rem;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  font-size: 1.5rem;
  user-select: none;

`

export const CartHeader = styled.h3`

`

export const Link = styled(RouteLink)`
  text-decoration: none;
`

export const DeleteDiv = styled.span`

`

export const DeleteIcon = styled(FaTrash)`
  color: red;
  position: absolute;
  left: 0;
  transform: rotate(0deg);
  transition: all .3s ease;
  cursor: pointer;
  
  &:hover {
    transform: rotate(45deg);
  }
  
`