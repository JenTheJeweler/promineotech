import React from "react";
// import { Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import UpdateListings from "./Components/Updatelistings";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-listing" element={<AddListing />} />
        <Route path="/admin-listings" element={<AdminListings />} />
        <Route path="/delete-listings" element={<DeleteListings />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/shop-user-listings" element={<ShopUserListings />} />
        <Route path="/socials-buttons" element={<SocialsButtons />} />
        <Route path="/update-listings" element={<UpdateListings />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        {/* ... other routes for each component ... */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
