//Create/.post page that lets the admin add listings to the API
// Components:
// Navbar
// Logo
// AddListing
import React, { useState } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

const AddListing = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    // Add other fields as needed
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://654c077d77200d6ba85875be.mockapi.io/WK15/Jewelry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Reset form fields after successful submission
        setFormData({
          title: "",
          description: "",
          // Reset other fields as needed
        });
        console.log("Listing added successfully!");
      } else {
        console.error("Failed to add listing");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <Logo />
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <br />
        {/* Add other form fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddListing;
