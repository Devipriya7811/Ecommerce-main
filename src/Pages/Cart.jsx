import React from "react";
import "./Cart.css";
import remove_icon from "../Components/Assets/cart_cross_icon.png";
import { CartUser } from "../Context/CartContext";
const Cart = () => {
  const { cartItems, removeFromCart } = CartUser();
  return (
    <div className="cart-items">
      {/* <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div> */}
      {cartItems.map((item) => (
        <div className="cart-items-format-main" key={item.id}>
          <div>
            <img src={item.image} alt="" />
          </div>
          <p>{item.description}</p>
          <p>${item.price * item.quantity}</p>
          <p>Quantity: {item.quantity}</p>
          <button className="but" onClick={() => removeFromCart(item.id) }>Remove</button>
        </div>
      ))}
      <hr />
    </div>
  );
};
export default Cart;
