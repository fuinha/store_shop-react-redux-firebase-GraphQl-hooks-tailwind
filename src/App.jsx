import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.component.jsx';
import HomePage from './pages/homepage/HomePage.jsx';
import ErrorPage from './pages/errorpage/ErrorPage.jsx'
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
