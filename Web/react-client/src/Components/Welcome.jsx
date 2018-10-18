import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { Button, Divider, Image, Transition, Form, Label} from 'semantic-ui-react';
import { CSSTransitionGroup } from 'react-transition-group';
import axios from 'axios';
import {browserHistory} from 'react-router';


class Welcome extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : "",
      redirect : false,
      visible: true,
      email : "",
      message:"hi",
      emailRedirect:false
    };
    this.handleChange= this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


    handleChange = e => {

      this.setState({ [e.target.name]:e.target.value})

    }


    handleSubmit = (e) =>{
      e.preventDefault()
      const {name,email,message} = this.state

      const form = axios.post('/api/form',{
        name,email,message
      })
      this.setState({emailRedirect:true})

    }

  componentDidMount(){
    let data = JSON.parse(sessionStorage.getItem('userData'));
    this.setState({name : data.name});
  }


  render(){
    const {visible} = this.state
    const {emailRedirect} = this.state
    if (!sessionStorage.getItem('userData') || this.state.redirect) {
      return(<Redirect to ={'/'}/>)
    }
    return(
      <div>
  <div class="welcome">
      <CSSTransitionGroup
        transitionName="hello"
          transitionAppear={true}
          transitionLeave={true}
          transitionEnterTimeout={3000}
          transitionAppearTimeout={6000}
          transitionLeaveTimeout={3000}>
         <h1>  Hi {this.state.name}
           <br/>The money you spent this time can buy</h1>
       </CSSTransitionGroup>

       <CSSTransitionGroup
         transitionName="compare"
           transitionAppear={true}
           transitionLeave={true}
           transitionEnterTimeout={3000}
           transitionAppearTimeout={6000}
           transitionLeaveTimeout={3000}>
          <h1> item1, item2, item3</h1>

        </CSSTransitionGroup>

        <CSSTransitionGroup
          transitionName="compare"
            transitionAppear={true}
            transitionLeave={true}
            transitionEnterTimeout={3000}
            transitionAppearTimeout={6000}
            transitionLeaveTimeout={3000}>
           <Form onSubmit={this.handleSubmit} >
             <Form.Field inline>
      <input type='email' name="email" onChange={this.handleChange} placeholder='email' />
      <Label for="email" basic color='white' id="remind" pointing='left'>
        please enter observer's email to continue
      </Label>
    </Form.Field>

             <Form.Button >Start the puzzle</Form.Button>
           </Form>

         </CSSTransitionGroup>

{emailRedirect &&(  <Redirect to={'/game'}/>)}

  </div>
  </div>

    )
  }
}

export default Welcome;
