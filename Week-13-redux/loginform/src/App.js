import React from 'react';
import './App.css'; 
import Navigation from './Navigation.jsx';
import LoginForm from './LoginForm.jsx';

function App() {
  return (
    <div>
      <Navigation/> 
      <div className="center"> 
        <LoginForm /> 
      </div>
    </div>
  );
}

export default App; 





//Original react app styling:
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>https://legacy.reactjs.org/docs/jsx-in-depth.html#:~:text=User%2DDefined%20Components%20Must%20Be%20Capitalized&text=We%20recommend%20naming%20components%20with,before%20using%20it%20in%20JSX.
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
