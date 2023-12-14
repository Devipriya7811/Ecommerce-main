import React from "react";
import "./Womens.css";
import products from "../data/WomenData.js";
const Womens = () => {
  return (
    <div className="womens">
      {/* <div className="women-one">
        <img src={product_1} alt="" />
        <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
        <p>
          $85.0 <span>$120.5</span>
        </p>
        <button>Add To Cart</button>
      </div>
      <div className="women-one">
        <img src={product_3} alt="" />
        <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
        <p>
          $85.0 <span>$120.5</span>
        </p>
        <button>Add To Cart</button>
      </div>
      <div className="women-one">
        <img src={product_4} alt="" />
        <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
        <p>
          $85.0 <span>$120.5</span>
        </p>
        <button>Add To Cart</button>
      </div>
      <div className="women-one">
        <img src={product_5} alt="" />
        <p>
          Men Green Solid Zippered Full-Zip Slim Fit Bomber <br />
          Jacket
        </p>
        <p>
          $85.0 <span>$120.5</span>
        </p>
        <button>Add To Cart</button>
      </div>
      <div className="women-one">
        <img src={product_9} alt="" />
        <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
        <p>
          $85.0 <span>$120.5</span>
        </p>
        <button>Add To Cart</button>
      </div>
      <div className="women-one">
        <img src={product_10} alt="" />
        <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
        <p>
          $85.0 <span>$120.5</span>
        </p>
        <button>Add To Cart</button>
      </div>
      <div className="women-one">
        <img src={product_11} alt="" />
        <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
        <p>
          $85.0 <span>$120.5</span>
        </p>
        <button>Add To Cart</button>
      </div>
      <div className="women-one">
        <img src={product_12} alt="" />
        <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
        <p>
          $85.0 <span>$120.5</span>
        </p>
        <button>Add To Cart</button>
      </div> */}
      {products.map((product) => (
        <div className="women-one" key={product.id}>
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

export default Womens;
