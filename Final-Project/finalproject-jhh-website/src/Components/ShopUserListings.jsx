//Listings with an add to cart button.
// widget? or plug in here?
//maybe this won't work fully for the purposes of fulfilling
//the project requirements?, but at least to display.

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Logo from "./Logo";

const UserListings = () => {
  const [listings, setListings] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // API endpoint
  const apiUrl = "https://654c077d77200d6ba85875be.mockapi.io/WK15/Jewelry";

  useEffect(() => {
    // Fetching listings from the API:
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

    fetchListings();
  }, []);

  // Function to add an item to the cart (dummy functionality for visual representation)
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };
  return (
    <div>
      <Navbar />
      <Logo />
      <Link to="/about">About</Link>

      <h2>User Listings</h2>
      <ul>
        {listings.map((item) => (
          <li key={item.id}>
            {/* Display listing data */}
            Type: {item.Type} - Price: {item.Price} - Materials:{" "}
            {item.Materials}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      {/* Display Cart Items */}
      <h2>Cart</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem.id}>
            {/* Display cart item data */}
            {cartItem.quantity} x {cartItem.Type} - ${cartItem.Price} each -
            Materials: {cartItem.Materials}
            <button onClick={() => removeFromCart(cartItem.id)}>Remove</button>
            <input
              type="number"
              value={cartItem.quantity}
              onChange={(e) =>
                updateQuantity(cartItem.id, parseInt(e.target.value))
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListings;
