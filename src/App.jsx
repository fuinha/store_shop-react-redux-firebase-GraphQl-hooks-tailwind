import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.component.jsx';
import HomePage from './pages/homepage/HomePage.jsx';
import ErrorPage from './pages/errorpage/ErrorPage.jsx';
import ShopPage from './pages/shoppage/ShopPage.jsx';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage.jsx';
import RegisterPage from './pages/auth/RegisterPage.jsx';
import {auth} from './firebase/firebase.utils'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [unsubscribeFromAuth, setUnsubscribeFromAuth] = useState(null)
  useEffect(() => { 
    auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    });
  })
  return (
    <div className='App'>
      <Navbar currentUser={ currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
