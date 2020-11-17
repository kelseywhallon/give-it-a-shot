import './App.css';
import React, { useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Routes from './config/routes'
import UserModel from './models/user'

function App() {

  // destructuring (use state returns an array of two items and allows us to set variables to the two items)
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'))
  
  // set userId in local storage
  const storeUser = (userId) => {
    setCurrentUser({ currentUser: userId })
    localStorage.setItem('id', userId)
  }

  const logout = (event) => {
    event.preventDefault()
    localStorage.removeItem('id')
    UserModel.logout()
      .then(res => {
        setCurrentUser(null)
        // redirect to /login
      })
  }

  return (
    <div className="App">
      <Home />
      
      {/* <Header currentUser={ currentUser }/>

      <Routes 
        currentUser={ currentUser }
        storeUser={ storeUser }
      /> */}
    </div>
  );
}

export default App;
