import React from "react";
import { ItemsContainer } from "./Home.components";
import { Objects as ItemsData } from "../Item/Data"
import { Item } from "../";

export default function Home() {
  return(
    <ItemsContainer>
    {
      ItemsData.map(item => <Item key={item.name} item={item}/>)
    }
    </ItemsContainer>
  )
}