import React, { useState, useEffect } from "react";
import { Container } from "../../globalStyles";
import { ItemsContainer } from "./Home.components";
import { Objects as ItemsData } from "../Item/Data"
import { Item } from "../";
import FlashMessage from "react-flash-message";

export default function Home({
  cartItems,
  setItems,
  total,
  setTotal,
}) {
  const [showFlash, setFlash] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFlash(false);
    }, 1500)
  }, [showFlash])
  return(
    <Container>
      {showFlash && <FlashMessage duration={1500} persistOnhOver={true}>Item added</FlashMessage>}
      <ItemsContainer>
        {
        ItemsData.map(item => <Item
          setFlash={setFlash}
          key={item.name} 
          item={item}
          setItems={setItems}
          cartItems={cartItems}
          total={total}
          setTotal={setTotal}
          />)
      }
      </ItemsContainer>
    </Container>
  )
}