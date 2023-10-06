import React, { useState } from 'react'
import './LogIn.css'
import './UserDashboard.css'
import UserDashboard from './components/UserDashboard.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Login from './components/Login';
import CancelledModal from './components/cancelledmodal';
import RegSuccessModal from './components/regsuccessmodal';
import CustomMsgModal from './components/custommsgmodal';
import CreateEventSuccessModal from './components/createeventsuccmodal';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/Login' component={Login} />
        <Route path="/UserDashboard" component={UserDashboard} />
        {/* <Route path="/cancelledmodal" component={CancelledModal} /> */}
        {/* <Route path="/regsuccessmodal" component={RegSuccessModal}/> */}
        {/* <Route path="/custommsgmodal" component={CustomMsgModal} /> */}
        {/* // <Route path="/createeventsuccmodal" component={CreateEventSuccessModal} /> */}
      </Switch>
    </Router>
  )
}

export default App