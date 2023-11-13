// Using the Houses API, or any open API of your choice you can find online, 
// create a single page that allows for all 4 CRUD operations to be performed on a resource from the API.
// Create a React component (or more, if needed) to represent the resource.
// Make all forms and other necessary UI pieces their own components as reasonable.


import React, {useEffect, useState} from 'react';
import Users from './users';
import './App.css';


function App() {
  const MOCK_API_URL = "https://654c077d77200d6ba85875be.mockapi.io/WK15/USER"
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
     await fetch(MOCK_API_URL)
      .then(data => {
       const apidata = data.json()
       return apidata
      })
      .then(data => setUsers(data))
  } catch(error) {console.log (error)}
}

  // this is my useEffect method
  useEffect(()=> {
    getUsers()
    // console.log(users)
  }, [] )
  console.log (users)
  return (
    <div>
      testtext
      {users.map((user)=> {
        return(
          <Users key={user.id} userdata={user} /> 
        )

      })}
    </div>
  );
}

export default App;
