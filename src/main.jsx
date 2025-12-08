import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext"; // make sure exact file name

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ToastContainer />
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
