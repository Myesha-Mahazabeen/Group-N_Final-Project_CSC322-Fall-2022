import React from "react";
import { Link } from "react-router-dom";
import "../styles/product.css";
import { useCart } from "react-use-cart";
import ReactStars from "react-rating-stars-component";

const Product = ({ product, showItemData }) => {
  const { addItem } = useCart();

  //For rating starts
  const rateMe = {
    size: 40,
    count: 5,
    isHalf: false,
    value: 1,
    color: "gray",
    activeColor: "#f0c14b",
    onChange: (newValue) => {
      console.log(`Example 3: new value is ${newValue}`);
    },
  };

  return (
    <div className="col-md-3 m-5 card p-2">
      <div className="product">
        <img src={product.image} className="img" />
        <p>{product.name}</p>
        {showItemData && (
          <div className="showcase-item-data">
            <p className="product__rating">
              <span style={{ fontWeight: "bold" }}>Rating:</span>
              <ReactStars {...rateMe} />
            </p>
            <p className="d-flex justify-content-between">
              <span style={{ fontWeight: "bold" }}>Highest Bid:</span>
              <strong>${product.price}</strong>
            </p>
            <p className="d-grid justify-content-end">
              <button className="btn btn-sm btn-outline-success">
                Place a Bid
              </button>
              <button
                className="m-1 btn btn-sm btn-outline-success"
                onClick={() => {
                  addItem(product, 1);
                  console.log(`item should be added ig`);
                }}
              >
                Add to Cart
              </button>
            </p>
          </div>
        )}
        {!showItemData && (
          <div className="cart-data">
            <p className="d-flex justify-content-between">
              <span style={{ fontWeight: "bold" }}>Quantity:</span>
              <strong>{product.quantity}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
