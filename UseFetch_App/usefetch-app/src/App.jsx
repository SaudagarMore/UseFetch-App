import React from "react";
import ProductList from "./components/ProductList";
import "./App.css";
function App() {
  return (
    <div>
      <header>
        <h2>My E-Commerce Store</h2>
        <p>React Custom Hooks - useFetch</p>
      </header>
      <ProductList />
    </div>
  );
}
export default App;