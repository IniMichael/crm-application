import React, { useState } from 'react'
import './LogIn.css'
import './UserDashboard.css'
import UserDashboard from './pages/UserDashboard.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignUp} />
        <Route path='/Login' component={Login} />
        <Route path="/UserDashboard" component={UserDashboard} />
      </Switch>
    </Router>
  )
}

export default App