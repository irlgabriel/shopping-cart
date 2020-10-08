import React from "react";
import { ItemsContainer } from "./Home.components";
import { Objects as ItemsData } from "../Item/Data"
import { Item } from "../";

export default function Home({
  cartItems,
  setItems,
  total,
  setTotal,
}) {
  return(
    <ItemsContainer>
    {
      ItemsData.map(item => <Item 
        key={item.name} 
        item={item}
        setItems={setItems}
        cartItems={cartItems}
        total={total}
        setTotal={setTotal}
        />)
    }
    </ItemsContainer>
  )
}