import React, { useState } from 'react';
import '../App.css';

const UpdateFlower = ({ flower, updateFlower }) => {
  const [editedFlower, setEditedFlower] = useState({ ...flower });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedFlower({
      ...editedFlower,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    updateFlower(editedFlower, editedFlower); // Pass the flower ID and updated data to the update function
  };

  return (
    <div className="update-flower">
      <h2>Edit Flower</h2>
      <label>
        Common Name:
        <input
          type="text"
          name="commonName"
          value={editedFlower.commonName}
          onChange={handleInputChange}
        />
      </label>
      {/* Add other input fields similarly */}
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateFlower;