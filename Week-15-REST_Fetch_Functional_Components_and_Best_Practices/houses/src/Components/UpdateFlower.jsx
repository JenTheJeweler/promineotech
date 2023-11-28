import React, { useState } from 'react';
import '../App.css';

const UpdateFlower = ({ flower, updateFlower, handleCancel }) => {
  const [editedFlower, setEditedFlower] = useState({ ...flower });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedFlower({
      ...editedFlower,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    updateFlower(editedFlower.id, editedFlower); // Pass the flower ID and updated data to the update function
    handleCancel();
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
      <label>
        Latin Name:
        <input
          type="text"
          name="latinName"
          value={editedFlower.latinName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Color:
        <input
          type="text"
          name="color"
          value={editedFlower.color}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Sun or Shade:
        <input
          type="text"
          name="sunShade"
          value={editedFlower.sunShade}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Common Name:
        <input
          type="text"
          name="plantingSeason"
          value={editedFlower.plantingSeason}
          onChange={handleInputChange}
        />
      </label> 
       <button onClick={handleUpdate} className='flower-update-button'>Update</button> 
    </div>
  );
};

export default UpdateFlower;