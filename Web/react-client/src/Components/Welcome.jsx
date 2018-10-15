import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { Button, Divider, Image, Transition, Form, Label} from 'semantic-ui-react';
import { CSSTransitionGroup } from 'react-transition-group';

class Welcome extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : " ",
      redirect : false,
      visible: true,
      email : "",
      message:""
    };
    this.handleChange= this.handleChange.bind(this)
  }


    handleChange = e => {
      this.setState({ [e.target.email]:e.target.value})
    }

    handleSubmit = e =>{
      e.preventDefault()
      const {email,message} = this.state
    }

  componentDidMount(){
    let data = JSON.parse(sessionStorage.getItem('userData'));
    this.setState({name : data.name});
  }
  render(){
    const {visible} = this.state
    if (!sessionStorage.getItem('userData') || this.state.redirect) {
      return(<Redirect to ={'/'}/>)
    }
    return(
      <div>
  <div class="introduction">
      <CSSTransitionGroup
        transitionName="hello"
          transitionAppear={true}
          transitionLeave={true}
          transitionEnterTimeout={3000}
          transitionAppearTimeout={6000}
          transitionLeaveTimeout={3000}>
         <h1>  Hi {this.state.name}
           <br/>This time you spent 99$</h1>
       </CSSTransitionGroup>

       <CSSTransitionGroup
         transitionName="compare"
           transitionAppear={true}
           transitionLeave={true}
           transitionEnterTimeout={3000}
           transitionAppearTimeout={6000}
           transitionLeaveTimeout={3000}>
          <h1> You can buy XX</h1>

        </CSSTransitionGroup>

        <CSSTransitionGroup
          transitionName="compare"
            transitionAppear={true}
            transitionLeave={true}
            transitionEnterTimeout={3000}
            transitionAppearTimeout={6000}
            transitionLeaveTimeout={3000}>
           <Form onSubmit={this.handleSubmit}>
             <Form.Field inline>
      <input type='email' name="email" onChange={this.handleChange} placeholder='email' />
      <Label for="email" basic color='white' id="remind" pointing='left'>
        please enter observer's email to continue
      </Label>
    </Form.Field>

             <Form.Button>Submit</Form.Button>
           </Form>

         </CSSTransitionGroup>


  </div>
  </div>

    )
  }
}

export default Welcome;
