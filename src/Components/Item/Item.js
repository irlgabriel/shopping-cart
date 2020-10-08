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
  setTotal,
  setFlash,
}) {
  const [clicked, setClicked] = useState(cartItems.includes(item));
  function clickHandler() {
    if (!cartItems.includes(item)) {
      setItems([...cartItems, item]);
      setTotal((parseFloat(total) + parseFloat(item.price)).toFixed(2));
      setClicked(true);
      setFlash(true);
    }
  }

  return (
    <ItemContainer>
      <Header>{item.name}</Header>
      <PriceLabel onClick={clickHandler} clicked={clicked}>
        <Bold>${item.price}</Bold>
        <BuyButton />
      </PriceLabel>
    </ItemContainer>
  );
}
