import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import Welcome from './Welcome';


const Routes = () => (

      <Router>
        <Switch>
          <Route name = "home" exact path ="/" component = {HomePage} />
          <Route path="/Welcome" component={Welcome}/>
        </Switch>
      </Router>
    
  );



export default Routes;
