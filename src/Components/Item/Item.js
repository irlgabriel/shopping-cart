import React from "react";
import { 
  ItemContainer,
  Header,
  PriceTag,
} from "./Item.components";

export default function Item({item}) {
  return(
    <ItemContainer>
      <Header>{item.name}</Header>
      <PriceTag>{item.price}</PriceTag>
    </ItemContainer>
  )
}