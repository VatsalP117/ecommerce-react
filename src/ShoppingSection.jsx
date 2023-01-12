import React from "react";
import ProductCard from "./ProductCard";
export default function ShoppingSection(props) {
  const products = props.newProducts.map((product) => {
    return (
      <ProductCard
        title={product.title}
        price={product.price}
        description={product.description}
        image={product.image || product.images[1]}
        idt={props.idt}
      />
    );
  });

  return (
    <div className="pt-3 mb-5">
      <div className="new-arrivals-heading ml-4">
        <h1 className="text-6xl font-bold mb-8 text-center">{props.type}</h1>
      </div>

      <div className="new-products flex flex-col md:flex-row flex-wrap gap-8 items-center justify-center pl-4 pr-4">
        {products}
      </div>
    </div>
  );
}
