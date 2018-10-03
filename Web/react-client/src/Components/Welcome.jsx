import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';


class Welcome extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : " ",
      redirect : false,
    };
  }

  dataGet(){
    let data = JSON.prase(sessionStorage.getItem('userData'));
    console.log(data);
    this.setState({name : data.userData.name});
  }
  render(){
    return(
  <div>Welcome {this.state.name} </div>
    )
  }
}

export default Welcome;
