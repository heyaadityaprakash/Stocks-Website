// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './landing page/home/Home';
import Signup from './landing page/signup/SignUp';
import About from './landing page/about/About';
import Products from './landing page/products/Products';
import Pricing from './landing page/pricing/Pricing';
import Support from './landing page/support/Support';
import Navbar from './landing page/Navbar'; // Assuming you have a navbar
import Footer from './landing page/Footer';
import Error from './landing page/Error';
const App = () => {
  return (
    <Router>
      <Navbar /> {/* Place your Navbar here so it appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<Error />} />

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
