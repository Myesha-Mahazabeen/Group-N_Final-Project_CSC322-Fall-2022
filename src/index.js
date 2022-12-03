import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "react-use-cart";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
