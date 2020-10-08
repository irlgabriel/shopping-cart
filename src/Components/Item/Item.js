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
      setTotal(total + item.price)
    }
    setClicked(true);
  }

  useEffect(updateTotal, [cartItems])

  function updateTotal() {
    setTotal(0);
    cartItems.forEach(obj => setTotal(total + obj.price))
  }

  return(
    <ItemContainer onClick={clickHandler}>
      <Header>{item.name}</Header>
      <PriceLabel clicked={clicked}><Bold>${item.price}</Bold><BuyButton/></PriceLabel>
      
    </ItemContainer>
  )
}