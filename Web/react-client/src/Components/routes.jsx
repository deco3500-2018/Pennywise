import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import Welcome from './Welcome';
import game from './Game';
import game2 from './Game2';
import game3 from './Game3';
import Tutorial from './tutorial';


const Routes = (props) => (

      <Router>
        <Switch>
          <Route name = "home" exact path ="/" component = {HomePage} />
          <Route path="/Welcome" component={Welcome}/>
          <Route path="/Game" component={game}/>
          <Route path="/Game2" component={game2}/>
          <Route path="/Game3" component={game3}/>
          <Route path="/tutorial" component={Tutorial}/>
        </Switch>
      </Router>

  );



export default Routes;
