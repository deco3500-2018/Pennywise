import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { Button, Divider, Image, Transition } from 'semantic-ui-react';


class Welcome extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : " ",
      redirect : false,
      visible: true
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
    <br/>This time you spent 99$
  </div>
  </div>

    )
  }
}

export default Welcome;
