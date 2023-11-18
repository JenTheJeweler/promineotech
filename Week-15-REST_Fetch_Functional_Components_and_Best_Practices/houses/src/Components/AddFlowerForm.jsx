import React, { useState } from 'react';

const AddFlowerForm = ({ addFlower }) => {
  const [flowerData, setFlowerData] = useState({
    commonName: '',
    latinName: '',
    color: '',
    sunShade: '',
    plantingSeason: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFlowerData({ ...flowerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFlower(flowerData);
    // Clears the form after submission
    setFlowerData({
      commonName: '',
      latinName: '',
      color: '',
      sunShade: '',
      plantingSeason: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Common Name:
        <input
          type="text"
          name="commonName"
          value={flowerData.commonName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Latin Name:
        <input
          type="text"
          name="latinName"
          value={flowerData.latinName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Color:
        <input
          type="text"
          name="color"
          value={flowerData.color}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Sun/Shade:
        <input
          type="text"
          name="sunShade"
          value={flowerData.sunShade}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Planting Season:
        <input
          type="text"
          name="plantingSeason"
          value={flowerData.plantingSeason}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit" className='add-flower-button'>Add Flower</button>
    </form>
  );
};

export default AddFlowerForm;
