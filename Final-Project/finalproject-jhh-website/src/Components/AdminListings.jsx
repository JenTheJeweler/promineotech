//Read .get
//this component calls the existing listings from (mock) API
//Needs to be password protected? Admin Login?
// Log-in Hidden at the bottom of the page so it's not obvious in the UI
// Components:
// Navbar
// Logo
// AdminListings

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Logo from "./Logo";

const AdminListings = () => {
  const [listings, setListings] = useState([]);
  const location = useLocation();

  // Your mock API endpoint
  const apiUrl = "https://654c077d77200d6ba85875be.mockapi.io/WK15/Jewelry";

  // Simulated admin authentication
  const isAdmin = location.search === "?admin=true";

  useEffect(() => {
    // Fetch listings from the API
    const fetchListings = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setListings(data);
        }
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    // Fetch listings only if authenticated as admin
    if (isAdmin) {
      fetchListings();
    }
  }, [isAdmin]);

  return (
    <div>
      <Navbar />
      <Logo />
      {isAdmin ? (
        <div>
          <h2>Admin Listings</h2>
          <ul>
            {listings.map((item) => (
              <li key={item.id}>
                {/* Display your listing data */}
                Type: {item.Type} - Price: {item.Price} - Materials:{" "}
                {item.Materials}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Login as admin to view listings.</p>
      )}
      {/* Login link */}
      <a href="?admin=true">Admin Login</a>
    </div>
  );
};

export default AdminListings;
