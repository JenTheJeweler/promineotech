// Navigation component that contains links styled like a navbar.
// The links don't have to go anywhere
// Should be at the top of the page (styled in CSS file??)


import React from 'react';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;