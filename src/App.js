import './App.css';
import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './components/Orders/Orders';

const promise = loadStripe('pk_test_51IxG1OSDd9Ncn7JVgVVTl9Vl9Kwj3t5SUcNhf6tZr3UpXZu36xEwI7BqT6olMPBqdl6yckPqfMw6wrDEjKLawjoL00U6LqfNJQ');


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
        
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders/>
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>

              <Payment />
            </Elements>
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route exact path='/'>
            <Header />
            <Home />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          
        </Switch>

        
        
      </div>
    </Router>

    
  );
}

export default App;
