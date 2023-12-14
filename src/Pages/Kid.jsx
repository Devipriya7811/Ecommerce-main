import React from "react";
import "./Kid.css";
import products from "../data/KidData";
const Kid = () => {
  return (
    <div className="kid">
      {/* <div className="kid-one">
        <img src={product_28} alt="" />
        <p>Boys Orange Colourblocked Hooded Sweatshirt</p>
        <p>
          $85.0 <span>$120.5</span>
        </p>
        <button>Add To Cart</button>
      </div>
      <div className="kid-one">
        <img src={product_29} alt="" />
        <p>Boys Orange Colourblocked Hooded Sweatshirt</p>
        <p>
          $85.0 <span>$120.5</span>
        </p>
        <button>Add To Cart</button>
      </div>
      <div className="kid-one">
        <img src={product_30} alt="" />
        <p>Boys Orange Colourblocked Hooded Sweatshirt</p>
        <p>
          $85.0 <span>$120.5</span>
        </p>
        <button>Add To Cart</button>
      </div>
      <div className="kid-one">
        <img src={product_31} alt="" />
        <p>Boys Orange Colourblocked Hooded Sweatshirt</p>
        <p>
          $85.0 <span>$120.5</span>
        </p>
        <button>Add To Cart</button>
      </div>
      <div className="kid-one">
        <img src={product_32} alt="" />
        <p>Boys Orange Colourblocked Hooded Sweatshirt</p>
        <p>
          $85.0 <span>$120.5</span>
        </p>
        <button>Add To Cart</button>
      </div>
      <div className="kid-one">
        <img src={product_33} alt="" />
        <p>Boys Orange Colourblocked Hooded Sweatshirt</p>
        <p>
          $85.0 <span>$120.5</span>
        </p>
        <button>Add To Cart</button>
      </div>
      <div className="kid-one">
        <img src={product_34} alt="" />
        <p>Boys Orange Colourblocked Hooded Sweatshirt</p>
        <p>
          $85.0 <span>$120.5</span>
        </p>
        <button>Add To Cart</button>
      </div>
      <div className="kid-one">
        <img src={product_35} alt="" />
        <p>Boys Orange Colourblocked Hooded Sweatshirt</p>
        <p>
          $85.0 <span>$120.5</span>
        </p>
        <button>Add To Cart</button>
      </div> */}
      {products.map((product) => (
        <div className="kid-one" key={product.id}>
          <img src={product.image} alt="" />
          <p>{product.description}</p>
          <p>
            ${product.price} <span>${product.discountPrice}</span>
          </p>
          <button>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};
export default Kid;
