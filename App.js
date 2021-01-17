import React,{useEffect} from "react"
import './App.css'
import Home from './Home'
import Header from './Header'
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import Orders from './Orders'
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom"
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise =loadStripe('pk_test_51I8ghdGzLGECB8zj35ZpltDwFE7fiQ8uZtpLTVfL7NWRrAxjA77GdcBhAMQhU8SYANnAFGMAN9nBy3FZENw0pVcG00J6TxpFGx')
function App() {
  const[{}, dispatch]=useStateValue()
  useEffect(()=>{
      auth.onAuthStateChanged(authUser =>{
        console.log("THE USER IS >>>",authUser)
        if(authUser){
              dispatch({
                type:'SET_USER',
                user:authUser
              })
        }else{
          dispatch({
            type:'SET_USER',
            user:null
          })
        }
      })
  },[])
  return (
    
    <Router>
      <div className="App">
     
      <Switch>
      <Route path='/orders'>
      <Header/>
        <Orders/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/checkout'>
      <Header/>
        <Checkout/>
      </Route>
      <Route path="/payment">
        <Header/>
        <Elements stripe={promise}>
        <Payment/>
        </Elements>
          

        </Route>
        <Route path="/">
        <Header/>
          <Home/>

        </Route>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
