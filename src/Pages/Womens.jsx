import React from "react";
import "./Womens.css";
import products from "../data/WomenData.js";
import { CartUser } from "../Context/CartContext";
import Cart from "./Cart";

const Womens = () => {
  const { addToCart } = CartUser();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="womens">
      {products.map((product) => (
        <div className="women-one" key={product.id}>
          <img src={product.image} alt="" />
          <p>{product.description}</p>
          <p>
            ${product.price} <span>${product.discountPrice}</span>
          </p>
          <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Womens;
