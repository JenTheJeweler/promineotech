//Update (.put)
//Lets admin change listings as needed for quantity, price, etc.
// Components:
// Navbar
// Logo
// Updatelistings

import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
import Logo from "./Logo";

const UpdateListings = () => {
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

  // Function to update a listing
  const updateListing = async (id, newData) => {
    try {
      // Make a PUT request to update the listing
      await fetch(
        `https://654c077d77200d6ba85875be.mockapi.io/WK15/Jewelry/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        }
      );
      // After successful update, fetch listings again to update state
      fetchListings();
    } catch (error) {
      console.error("Error updating listing: ", error);
    }
  };

  useEffect(() => {
    // Fetch listings when the component mounts
    fetchListings();
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <Logo />
      <h1>Update Listings</h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            {/* Display listing information */}
            {listing.title} -{" "}
            <button
              onClick={() =>
                updateListing(listing.id, {
                  // Update with necessary fields (e.g., quantity, price, etc.)

                  type: "Ring",
                  price: "120.00",
                  materials: "Sterling silver, Garnet",
                  id: "1",
                  // Add more fields as needed for updating
                })
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdateListings;
