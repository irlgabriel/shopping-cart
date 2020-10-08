import React from "react";
import { Container, Bold } from "../../globalStyles";
import {
  CartRow,
  CartData,
  CartContainer,
  CartTable,
  DeleteIcon,
} from "./ShoppingCart.components";

export default function ShoppingCart({
  cartItems,
  setItems,
  total,
  setTotal,
}) {
  function deleteHandler(e) {
    const itemName = e.target.getAttribute("data-name")
    console.log(e.target, e.itemName)
    setItems(cartItems.filter(item => item.name !== itemName))  
  }
  return(
    <Container>
      <CartContainer>
        
        { 
          cartItems.length != 0 &&
          <CartTable>
            <CartRow>
              <CartData>
                <Bold>Item Name</Bold>
              </CartData>
              <CartData>
                <Bold>Item Price</Bold>
              </CartData>
            </CartRow>
            {
              cartItems.map(item =>
                <CartRow key={item.name} data-name={item.name}>
                  <CartData>  
                  <DeleteIcon data-name={item.name} onClick={deleteHandler} />
                    {item.name}
                  </CartData>
                  <CartData>
                    ${item.price}
                  </CartData>
                  
                </CartRow>
              )
            }
            <CartRow>
              <CartData>
                <Bold>Total</Bold>
              </CartData>
              <CartData>
              {
                <Bold>{"$" + total}</Bold> 
              }
              </CartData>
            </CartRow>
          </CartTable>
        }
      </CartContainer>
    </Container>
  )
}