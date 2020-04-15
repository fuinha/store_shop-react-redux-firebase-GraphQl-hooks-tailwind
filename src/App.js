import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.component.jsx'
import HomePage from './pages/homepage/HomePage.jsx'

function App() {
  return (
    <div className='App'>
      <Navbar />
        <HomePage /> 
    </div>
  );
}

export default App;
