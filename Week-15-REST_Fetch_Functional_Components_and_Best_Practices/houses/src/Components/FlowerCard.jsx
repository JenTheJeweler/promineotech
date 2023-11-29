import React, { useState, useEffect } from 'react';
import '../App.css';
import UpdateFlower from './UpdateFlower';

const FlowerCard = ({ flower, deleteFlower, updateFlower }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedFlower, setUpdatedFlower] = useState({ ...flower });
     console.log(updatedFlower)
    // Add useEffect to update the local state when the flower prop changes
    useEffect(() => {
    setUpdatedFlower({ ...flower });
        }, [flower]);


    const handleDelete = async () => {
        console.log('Deleting flower ID:', flower.id);
        deleteFlower(flower.id); // This should trigger the deleteFlower function
    };

    const handleEdit = () => {
        setIsEditing(true);
      };

      const handleCancel = () => {
        setIsEditing(false);
        console.log("should go away")
        setUpdatedFlower({ ...flower }); // Reset the local state to original data on cancel
      };
    
    //   const handleUpdate = async () => {
    //     try {
    //       const response = await updateFlower(updatedFlower.id, updatedFlower); // Send updated data to the API
    //       if (response && response.ok) {
    //       setIsEditing(false); // Exit edit mode after successful update
    //       setUpdatedFlower({ ...updatedFlower });
    //     } else {
    //         throw new Error('Failed to update flower');
    //       }
    //     } catch (error) {
    //       console.error('Error updating flower:', error);
    //       // Handle error updating flower
    //     }
    //   };

      const handleUpdate = async () => {
        try {
          await updateFlower(updatedFlower.id, updatedFlower); // Send updated data to the API
          
          setIsEditing(false); // Exit edit mode after successful update
          updateFlower(updatedFlower.id, updatedFlower); //Update the original flower state with the updated data
          
        } catch (error) {
          console.error('Error updating flower:', error);
          // Handle error updating flower
        }
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedFlower({
          ...updatedFlower,
          [name]: value,
        });
      };
    

    return (
      // <div className="container">
      //   <div className="cards-wrapper">
          <div className="flower-card">
          {isEditing ?(
            <UpdateFlower 
            flower={updatedFlower} 
            updateFlower={updateFlower}
            handleCancel={handleCancel}
            handleUpdate={handleUpdate}
            handleInputChange={handleInputChange}
            />
          ) : (
            <div>
            <h2>{flower.commonName}</h2>
            <p>Latin Name: {flower.latinName}</p>
            <p>Color: {flower.color}</p>
            <p>Sun/Shade: {flower.sunShade}</p>
            <p>Planting Season: {flower.plantingSeason}</p>

                 
                
    <button onClick={handleEdit}className='flower-update-button'>Update Flower</button> {/* Edit button */} 
    <button onClick={handleDelete} className='flower-delete-button'>
        {/* Delete button */}
        
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            fill="currentColor" 
            className="bi bi-trash" 
            viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                 </svg>
               </button>
             </div>
            )}
        </div>
  //     </div>
  //  </div>
  );
};

export default FlowerCard;