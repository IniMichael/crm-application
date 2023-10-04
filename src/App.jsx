import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import NavBar from './pages/navBar';
function App() {

  return (
      <div>
        <Router>
          <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/navBar' component={NavBar} />
          </Switch>
        </Router>
      </div>
      );
}

export default App;