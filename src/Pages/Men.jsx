import React, { useContext } from "react";
import "./Men.css";
import products from "../data/MenData";
import { CartUser } from "../Context/CartContext";
import Cart from "./Cart";

const Men = () => {
  const { addToCart } = CartUser();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="mens">
      {products.map((product) => (
        <div className="men-one" key={product.id}>
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

export default Men;
