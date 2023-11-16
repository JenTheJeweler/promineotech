// Username and password input fields, an h3 that says Log In, with a border. 
// Style the component using the default generated CSS file.


import React from 'react';

function LoginForm() {
  return (
    <div className="LoginForm">
      <h3>Log In</h3>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
    </div>
  );
}

export default LoginForm;
