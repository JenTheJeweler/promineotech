import React from 'react';
import Navigation from './components/Navigation.jsx';
import LoginForm from './components/LoginForm.jsx';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {
  
  return (
    <div>
      <Navigation/> 
      <button className="btn btn-danger">DO NOT PUSH THIS!</button>

      <div className="center"> 
        <LoginForm /> 
      </div>
    </div>
  );
}

export default App; 





