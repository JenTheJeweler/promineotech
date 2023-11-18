//
// CRUD
// POST 
// GET 
// DELETE 
// UPDATE
// Using any open API of your choice you can find online, 
// create a single page that allows for all 4 CRUD operations 
// to be performed on a resource from the API.
// Create a React component (or more, if needed) to represent the resource.
// Make all forms and other necessary UI pieces their own components as reasonable.

// ****In the name of complete transparency, here is the Chat gpt link that 
//  I sourced all this code, and explanations from:  
//  https://chat.openai.com/c/658c23d9-ae48-4278-a0ab-20ee1366d894
//  I am learning, but I don't think I can say that I can code yet. 




import React, {useEffect, useState} from 'react';
import './App.css';
import AddFlowerForm from './Components/AddFlowerForm';
import Flowers from './Components/Flowers';
import FlowerCard from './Components/FlowerCard';


function App() {
  const MOCK_API_URL = "https://654c077d77200d6ba85875be.mockapi.io/WK15/Flowers"
  const [flowersData, setFlowersData] = useState([]);
  //this code block sets a variable holding the API URL and 
  //sets up an empty state (flowersData) to hold the flower information 
  //obtained from the API/URL.

  useEffect(() => { // Use Effect runs once when page loads.
    fetch(MOCK_API_URL) //fetch calls api and gets data
      .then((response) => response.json()) //.json() convert that data to json
      .then((data) => setFlowersData(data)) // this updates flowersData in state.
      .catch((error) => console.error('Error fetching flowers:', error));
  }, [MOCK_API_URL]);
  // this block uses 'useEffect' to fetch data from a specified API endpoint 
  //(MOCK_API_URL) when the component loads or whenever that URL changes. 
  //It grabs the flower data from the (mock)API/URL and stores it in the flowersData state. 
  //This makes sure the component has the flower information available
  // to show or work with in the app


  const addFlower = async (newFlowerData) => {
    try {
     const response = await fetch(MOCK_API_URL, {
      method: 'POST', //CREATE
      headers:{
        'Content-Type': 'application/json',
        },

        body: JSON.stringify(newFlowerData),
      });
      //this code block creates a function that sends a request to a specific 
      // API endpoint to add new flower data using the POST method, 
      // with the details provided in newFlowerData.



      if (response.ok) //if the response from the API goes through //
      {
        const data = await response.json();//- Parses the response body as JSON. 
      //( taking a JSON-formatted string (text) and converting it into a JavaScript object)
        setFlowersData([...flowersData, data]);// UPDATEs state with the new flower
      } else {
        throw new Error('Failed to add flower');
      }
    } catch (error) {
      console.error('Error adding flower:', error);
    }
  };
   //The above code block manages the *response* after attempting to add a new flower. 
    // if successful it updates the state with the new flower data. 
    // If unsuccessful, it throws an error and logs the error message to the 
    // console for debugging purposes.

    //DELETE:
    const deleteFlower = async (flowerId) => {
      try {

        const deleteURL = `${MOCK_API_URL}/${Flowers.id}`;
        console.log('Deleting flower at:', deleteURL);
    
        const response = await fetch(deleteURL, {
          method: 'DELETE',
                  // const response = await fetch(`${MOCK_API_URL}/${flowerId}`, {
        //   method: 'DELETE', // DELETE request to remove the flower
        });
  
        if (response.ok) {
          // Filter out the deleted flower from the state
          // const updatedFlowers = flowersData.filter((flower) => flower.id !== flowerId);
          const updatedResponse = await fetch(MOCK_API_URL);
          const updatedData = await updatedResponse.json();
          setFlowersData(updatedData);
        } else {
          throw new Error('Failed to delete flower');
        }
      } catch (error) {
        console.error('Error deleting flower:', error);
      }
    };



    return (
      <div>
        {/* Other components */}
        <AddFlowerForm addFlower={addFlower} />
        {/* Renders the AddFlowerForm component. */}
        {/* Passes a function addFlower as a prop to the AddFlowerForm component. */}
        {/* This allows the AddFlowerForm component to use the addFlower function 
            for adding new flowers. */}
        {/* Display existing flowers */}
        {flowersData.map((flower) => (
          <Flowers key={flower.id} flowersdata={flower} />
        ))}
        {/* Render Flowers components for each flower in flowersData */}
        
        {/* Display existing flowers as FlowerCard components */}
        {flowersData.map((flower) => (
          <FlowerCard key={flower.id} flower={flower} deleteFlower={deleteFlower} />
        ))}
        {/* Render FlowerCard components for each flower in flowersData */}
      </div>
    );
    
  }
  

export default App;