//Create a Navigation component that contains links styled like a navbar.
//The links don't have to go anywhere.


import React from 'react';

function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}



export default Navigation;

