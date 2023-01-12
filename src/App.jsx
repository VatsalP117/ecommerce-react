import { useState } from "react";

import "./App.css";
import { useEffect } from "react";

import Home from "./Home.jsx";
import ShoppingSection from "./ShoppingSection";

function App() {
  const [arrivalsData, setArrivalsData] = useState([]);
  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  useEffect(function () {
    fetch(
      "https://api.escuelajs.co/api/v1/categories/1/products?offset=0&limit=6"
    )
      .then((res) => res.json())
      .then((json) => setArrivalsData(json));
  }, []);
  useEffect(function () {
    fetch("https://fakestoreapi.com/products/category/men's clothing?limit=3")
      .then((res) => res.json())
      .then((json) => setMenData(json));
  }, []);
  useEffect(function () {
    fetch("https://fakestoreapi.com/products/category/women's clothing?limit=3")
      .then((res) => res.json())
      .then((json) => setWomenData(json));
  }, []);

  return (
    <div className="App  flex flex-col">
      <Home />
      <ShoppingSection newProducts={arrivalsData} type="New Arrivals" idt="1" />
      <ShoppingSection newProducts={menData} type="Men's Fashion" idt="2" />
      <ShoppingSection
        newProducts={womenData}
        type="Women's Clothing"
        idt="3"
      />
    </div>
  );
}

export default App;
