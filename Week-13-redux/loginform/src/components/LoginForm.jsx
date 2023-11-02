//1.Username and password input fields, 
//2.an h3 that says Log In, with a border. 
//3.Style the component using the default generated CSS file.

import React from 'react';



function LoginForm() {
  return (
    <div className="LoginForm">
      <h3>Log In</h3>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button  className='btn btn-primary'>Test</button>
    </div>
  
  );
}

export default LoginForm;