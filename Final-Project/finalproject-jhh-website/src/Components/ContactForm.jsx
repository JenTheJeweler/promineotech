import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postDataToServer(formData);
  };

  const postDataToServer = (formData) => {
    fetch("https://654c077d77200d6ba85875be.mockapi.io/WK15/Jewelry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data sent:", data);
        // Handle the success response from the server
        // You might redirect the user or show a success message
      })
      .catch((error) => {
        console.error("There was an error:", error);
        // Handle error scenarios, such as displaying an error message to the user
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          maxLength={200}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
