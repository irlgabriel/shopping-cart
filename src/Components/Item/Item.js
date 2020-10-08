import React, { useState, useEffect } from "react";
import { 
  ItemContainer,
  Header,
  PriceLabel,
  BuyButton,
  Bold,
} from "./Item.components";

export default function Item({
  item,
  cartItems,
  setItems,
  total,
  setTotal
}) {
  const [clicked, setClicked] = useState(cartItems.includes(item))
  function clickHandler() {
    if(!cartItems.includes(item)) {
      setItems([...cartItems, item]);
      setTotal(parseInt((total + item.price)).toFixed(2))
    }
    setClicked(true);
  }

  return(
    <ItemContainer onClick={clickHandler}>
      <Header>{item.name}</Header>
      <PriceLabel clicked={clicked}><Bold>${item.price}</Bold><BuyButton/></PriceLabel>
      
    </ItemContainer>
  )
}