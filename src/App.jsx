import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.component.jsx';
import HomePage from './pages/homepage/HomePage.jsx';
import ErrorPage from './pages/errorpage/ErrorPage.jsx';
import ShopPage from './pages/shoppage/ShopPage.jsx'
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ShopPage} />
        <Route  component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
