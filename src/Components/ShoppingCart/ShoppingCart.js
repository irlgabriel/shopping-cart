import React from "react";
import { Container, Bold } from "../../globalStyles";
import {
  CartRow,
  CartData,
  CartContainer,
  CartTable,
  DeleteIcon,
  CartHeader,
  DeleteDiv,
  Link,
} from "./ShoppingCart.components";

export default function ShoppingCart({
  cartItems,
  setItems,
  total,
  setTotal,
}) {
  function deleteHandler(e) {
    e.stopPropagation()
    const itemName = e.target.parentElement.parentElement.getAttribute("data-name");
    const currentItem = cartItems.find(item => item.name === itemName)
    console.log(itemName, currentItem)  
    setItems(cartItems.filter(item => item.name !== itemName))
    // setTotal(total - currentItem.price);
  }
  return(
    <Container>
      <CartContainer>
        { 
          cartItems.length === 0 && 
          <Container>
            <CartHeader>You don't have any items in your cart</CartHeader>
            <Link to="/">Pick some Items</Link>
          </Container>
        }
        { 
          cartItems.length !== 0 &&
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
                  <DeleteDiv data-name={item.name} onClick={deleteHandler} >
                    <DeleteIcon />
                  </DeleteDiv>
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