import React, {Component} from 'react';
import Routes from'./routes';

class App extends Component{
  constructor(){
    super();
    this.state = {appName:"Puzzle pay"}
  }


  render(){
    return(
      <div>
      <Routes name={this.state.appName}/>
      </div>
    );
  }
}

export default App;
