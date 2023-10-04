import React, { useState } from 'react'
import './LogIn.css'
import './UserDashboard.css'
import Login from './Components/Login'
import UserDashboard from './Components/UserDashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/UserDashboard" component={UserDashboard} />
      </Switch>
    </Router>
  )
}

export default App
