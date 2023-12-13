import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import AddListing from "./Components/AddListing";
import AdminListings from "./Components/AdminListings";
import DeleteListings from "./Components/DeleteListings";
import Logo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import Resume from "./Components/Resume";
import ShopUserListings from "./Components/ShopUserListings";
import SocialsButtons from "./Components/SocialsButtons";
import UpdateListings from "./Components/UpdateListings";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route to="/" element={<Home />} />
          <Route to="/about" element={<About />} />
          <Route to="/add-listing" element={<AddListing />} />
          <Route to="/admin-listings" element={<AdminListings />} />
          <Route to="/delete-listings" element={<DeleteListings />} />
          <Route to="/logo" element={<Logo />} />
          {/* <Route to="/navbar" element={<Navbar />} /> */}
          <Route to="/resume" element={<Resume />} />
          <Route to="/shop-user-listings" element={<ShopUserListings />} />
          <Route to="/socials-buttons" element={<SocialsButtons />} />
          <Route to="/update-listings" element={<UpdateListings />} />
          <Route to="/ContactForm" element={<ContactForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
