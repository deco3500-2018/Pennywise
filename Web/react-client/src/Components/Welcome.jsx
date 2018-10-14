import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';


class Welcome extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : " ",
      redirect : false,
    };
  }

  componentDidMount(){
    let data = JSON.parse(sessionStorage.getItem('userData'));
    this.setState({name : data.name});
  }
  render(){
    if (!sessionStorage.getItem('userData') || this.state.redirect) {
      return(<Redirect to ={'/'}/>)
    }
    return(
      <div>
  <div class="introduction">Hi {this.state.name}
    <br/>This time you spent
  </div>

  <div class="introduction" id="tutorial">tutorial button
  </div>

  </div>

    )
  }
}

export default Welcome;
