'use client';
import React, { useEffect, useState } from "react";
import "./Scroll.css"; // Make sure this file exists

const ScrollIndicator = ({ scrollProgress }) => {
  return (
    <div className="scroll-indicator-container">
      <div
        className="scroll-indicator-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

function App() {
  const [products, setProducts] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Fetching products from API
 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  fetchProducts();
}, []);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <ScrollIndicator scrollProgress={scrollProgress} />

      <h1>📦 Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>₹ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
