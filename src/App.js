import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import scrollreveal from "scrollreveal";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Portfolio from "./components/Portfolio";
// import Products from "./components/Products";
// import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
import Home from './components/home';
import Login from "./login/LoginForm";
import Staff from "./components/Timepass/MessStaffTools";
import ShoppingCart from "./components/shoppingcart";
import PaymentGateway from "./components/PaymentGateway";

export default function App() {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        .footer
      `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/checkout" element={<ShoppingCart setTotalAmount={setTotalAmount} />} />
        <Route path="/payment" element={<PaymentGateway totalAmount={totalAmount} />} />
      </Routes>
    </Router>
  );
}
