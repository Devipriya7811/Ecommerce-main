import React from "react";
import "./Kid.css";
import products from "../data/KidData";
import { CartUser } from "../Context/CartContext";
import Cart from "./Cart";

const Kid = () => {
  const { addToCart } = CartUser();

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <div className="kid">
      {products.map((product) => (
        <div className="kid-one" key={product.id}>
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
export default Kid;
