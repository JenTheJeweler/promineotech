//1.Username and password input fields, 
//2.an h3 that says Log In, with a border. 
//3.Style the component using the default generated CSS file.

import React from 'react';




function LoginForm() {
  return (
    <div className="LoginForm">
       <h3 className="border p-4">Log In</h3> {/* Add the 'border' and 'p-4' classes */}
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button  className='btn btn-primary'>Submit</button>
    </div>
  
  );
}

export default LoginForm;