import './App.css';
import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';




function App() {
  const [{}, dispatch] =useStateValue();

  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >> ', authUser);

      if(authUser) {
        ////////////logged in / was already
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })

      } else {
        //// logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })

  }, []);

  return (

    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
        </Switch>

        
        
      </div>
    </Router>

    
  );
}

export default App;
