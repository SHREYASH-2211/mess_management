import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ShoppingCart.css";
import product1 from "../assets/product1.jpg";
import product3 from "../assets/product3.jpg";
import product6 from "../assets/poha.webp";

const ShoppingCart = ({ setTotalAmount }) => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Vadapav",
      price: 5.0,
      qty: 1,
      image: product1,
    },
    {
      id: 2,
      name: "Egg Sandwich",
      price: 4.99,
      qty: 1,
      image: product3,
    },
    {
      id: 3,
      name: "Poha",
      price: 4.99,
      qty: 1,
      image: product6,
    },
  ]);

  const navigate = useNavigate();

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, qty) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, qty } : item)));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

  const handleCheckout = () => {
    setTotalAmount(parseFloat(total));
    navigate("/payment");
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="item-image" />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)} /-</p>
            <input
              type="number"
              min="1"
              value={item.qty}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
              className="qty-input"
            />
          </div>
          <FaTrash className="delete-icon" onClick={() => handleRemove(item.id)} />
        </div>
      ))}

      <div className="cart-total">
        <h2>Total: ${total}/-</h2>
        <button onClick={handleCheckout} className="checkout-btn">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
