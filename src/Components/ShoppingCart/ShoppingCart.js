import React, { useState } from "react";
import { Container, Bold, FlashContainer } from "../../globalStyles";
import FlashMessage from "react-flash-message";
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

export default function ShoppingCart({ cartItems, setItems, total, setTotal }) {
  const [showFlash, setFlash] = useState(false);
  function deleteHandler(e) {
    e.stopPropagation();
    const itemName = e.target.parentElement.parentElement.getAttribute(
      "data-name"
    );
    const currentItem = cartItems.find((item) => item.name === itemName);
    console.log(itemName, currentItem);
    setItems(cartItems.filter((item) => item.name !== itemName));
    setTotal((parseFloat(total) - parseFloat(currentItem.price)).toFixed(2));
    setFlash(true);
  }
  return (
    <Container>
      {showFlash && (
        <FlashMessage className="alert notification" duration={1500}>
          Item removed from cart!
        </FlashMessage>
      )}
      <CartContainer>
        {cartItems.length === 0 && (
          <Container>
            <CartHeader>You don't have any items in your cart</CartHeader>
            <Link to="/">Pick some Items</Link>
          </Container>
        )}
        {cartItems.length !== 0 && (
          <CartTable>
            <CartRow>
              <CartData>
                <Bold>Item Name</Bold>
              </CartData>
              <CartData>
                <Bold>Item Price</Bold>
              </CartData>
            </CartRow>
            {cartItems.map((item) => (
              <CartRow key={item.name} data-name={item.name}>
                <CartData>
                  <DeleteDiv data-name={item.name} onClick={deleteHandler}>
                    <DeleteIcon />
                  </DeleteDiv>
                  {item.name}
                </CartData>
                <CartData>${item.price}</CartData>
              </CartRow>
            ))}
            <CartRow>
              <CartData>
                <Bold>Total</Bold>
              </CartData>
              <CartData>{<Bold>{"$" + total}</Bold>}</CartData>
            </CartRow>
          </CartTable>
        )}
      </CartContainer>
    </Container>
  );
}
