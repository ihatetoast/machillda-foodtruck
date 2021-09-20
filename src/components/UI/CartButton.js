import React from "react";
import ShoppingBasketIcon from "./ShoppingBasketIcon";
const CartButton = (props) => {
  return (
    <button>
      <span>
        <ShoppingBasketIcon />
      </span>
      <span>Cart</span>
      <span>x</span>
    </button>
  );
};

export default CartButton;
