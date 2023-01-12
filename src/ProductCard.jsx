import * as React from "react";
export default function ProductCard(props) {
  return (
    <div className="product-card flex flex-col w-80 gap-2 items-center mb-4">
      <img src={props.image} width="240px" className="product-card-img" />
      <div className="product-card-details flex flex-col justify-center items-center gap-1">
        <div className="product-card-header-text text-lg font-bold text-center">
          <h2>{props.title}</h2>

          <h2 className="text-center">${props.price}</h2>
          <button className="add-to-cart-btn text-sm font-semibold text-white p-1 rounded-2xl">
            Add to Cart
          </button>
        </div>
        {props.idt == "1" && (
          <h3 className="product-card-description text-center text-sm font-semibold">
            {props.description}
          </h3>
        )}
      </div>
    </div>
  );
}
