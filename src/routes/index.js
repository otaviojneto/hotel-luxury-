import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../pages/Home';
import Facilities from '../pages/Facilities';
import Rooms from '../pages/Rooms';
import Contact from '../pages/Contact/';


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/facilities" component={Facilities} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/contact" component={Contact} />

    </Switch>
  </Router>
);

export default Routes;
