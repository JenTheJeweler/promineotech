//Basic homepage with Navbar, socials links, Shop now button,
// and contact form
// Components:
// Navbar
// Logo
// SocialsButtons
// ShopUserListings
// ContactForm
// ShopNowButton

import React from "react";
// import Navbar from "./Navbar";
import Logo from "./Logo";
import SocialsButtons from "./SocialsButtons";
import ShopUserListings from "./ShopUserListings";
// import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Logo />
      <SocialsButtons />
      <ShopUserListings />
      <button>Shop Now</button>
    </div>
  );
};

export default Home;
