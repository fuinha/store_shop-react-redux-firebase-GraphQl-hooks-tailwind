import React, { useEffect} from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.component.jsx';
import HomePage from './pages/homepage/HomePage.jsx';
import ErrorPage from './pages/errorpage/ErrorPage.jsx';
import ShopPage from './pages/shoppage/ShopPage.jsx';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage.jsx';
import RegisterPage from './pages/auth/RegisterPage.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

function App({setCurrentUser}) {
 
  useEffect(() => { 
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
  
        userRef.onSnapshot(snapShot => {
        
          setCurrentUser({ id: snapShot.id, ...snapShot.data() })
        })
      }
      setCurrentUser(userAuth)
    });
  }, [])

  return (
    <div className='App'>
      <Navbar />
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
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);

