import React, { useEffect, useState } from 'react';
import './App.css';
import AddFlowerForm from './Components/AddFlowerForm';
import Flowers from './Components/Flowers';

function App() {
  const MOCK_API_URL = "https://654c077d77200d6ba85875be.mockapi.io/WK15/Flowers";
  const [flowersData, setFlowersData] = useState([]);

  useEffect(() => {
    fetch(MOCK_API_URL)
      .then((response) => response.json())
      .then((data) => setFlowersData(data))
      .catch((error) => console.error('Error fetching flowers:', error));
  }, [MOCK_API_URL]);

  // Function to update a flower by ID
  const updateFlower = async (flowerId, updatedFlowerData) => {
    try {
      const response = await fetch(`${MOCK_API_URL}/${flowerId}`, {
        method: 'PUT', // or 'PATCH' based on API requirements
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFlowerData),
      });

      if (response.ok) {
        // Perform any necessary handling after a successful update
        console.log('Flower updated successfully!');
        // You might want to update the state after an update operation
        // For simplicity, this example doesn't include state update after an update operation
      } else {
        throw new Error('Failed to update flower');
      }
    } catch (error) {
      console.error('Error updating flower:', error);
    }
  };

  return (
    <div>
      <AddFlowerForm addFlower={addFlower} />
      {flowersData.map((flower) => (
        <Flowers key={flower.id} flowersdata={flower} updateFlower={updateFlower} />
      ))}
    </div>
  );
}

export default App;