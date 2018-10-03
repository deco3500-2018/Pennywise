import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import Welcome from './welcome';


class App extends Component {
  render(){
    return (
      <Router>
          <Route name = "home" exact path ="/" component = {HomePage} />
          
      </Router>
    )
  }
}

export default App;
