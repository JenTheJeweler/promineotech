//A delete button to remove listings as needed--to be displayed
// on the admin listings page
// Components:
// Navbar
// Logo
// DeleteListings

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

const DeleteListings = () => {
  // State to hold the listings
  const [listings, setListings] = useState([]);

  // Function to fetch listings from the API
  const fetchListings = async () => {
    try {
      // Fetch data from the API endpoint
      const response = await fetch(
        "https://654c077d77200d6ba85875be.mockapi.io/WK15/Jewelry"
      );
      const data = await response.json();
      // Set the listings in state
      setListings(data);
    } catch (error) {
      console.error("Error fetching listings: ", error);
    }
  };

  // Function to delete a listing
  const deleteListing = async (id) => {
    try {
      // Make a DELETE request to the API
      await fetch(
        `https://654c077d77200d6ba85875be.mockapi.io/WK15/Jewelry/${id}`,
        {
          method: "DELETE",
        }
      );
      // After successful deletion, update the listings
      fetchListings();
    } catch (error) {
      console.error("Error deleting listing: ", error);
    }
  };

  useEffect(() => {
    // Fetch listings when the component mounts
    fetchListings();
  }, []);

  return (
    <div>
      <Navbar />
      <Logo />
      <h1>Delete Listings</h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            {/* Display listing information */}
            {listing.title} -{" "}
            <button onClick={() => deleteListing(listing.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteListings;
