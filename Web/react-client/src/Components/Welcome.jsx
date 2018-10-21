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
      emailRedirect:false,
      money:"",
      order:""
    };
    this.handleChange= this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


    handleChange = e => {

      this.setState({ [e.target.name]:e.target.value})

    }


    handleSubmit = (e) =>{
      e.preventDefault()
      const {name,email,message,order} = this.state

      if (this.state.email == JSON.parse(sessionStorage.getItem('userData')).email) {
      alert("Please input another people's email address")
      }else{
        const form = axios.post('/api/form',{
          name,email,message,order
        });this.setState({emailRedirect:true})}


    }

  componentDidMount(){
    let data = JSON.parse(sessionStorage.getItem('userData'));

    // get money from node
    // let request = axios.post('/api/prices').then(function(resposne){money=resposne.data;console.log(money);return money;});
    this.setState({name : data.name});
    this.setState({order: Math.floor(Math.random() * 3)});


  }


  render(){
    const {visible} = this.state
    const {emailRedirect} = this.state
    const {order} = this.state

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
         <h1>  Hi {this.state.name}   <br/>
           {order == "" &&(   <h1> 	</h1>)}
            {order == 0 &&(   <h1>  The money you spent this time can buy	</h1>)}
              {order == 1 &&(   <h1>  The money you spent this time can buy	</h1>)}
              {order == 2 &&(   <h1>  The money you spent this time you can travel to</h1>)}
      </h1>
       </CSSTransitionGroup>

       <CSSTransitionGroup
         transitionName="compare"
           transitionAppear={true}
           transitionLeave={true}
           transitionEnterTimeout={3000}
           transitionAppearTimeout={6000}
           transitionLeaveTimeout={3000}>
           {order == "" &&(   <h1> 	</h1>)}
           {order === 0 &&(   <h1 style={{fontSize:50}}> 3 🥛 (3L), 4 🍕 (Domino), 5 🍉</h1>)}
          {order === 1 &&(   <h1 style={{fontSize:50}}> 3 ☕(Nescafe Blend 43 150g), 20 🍫 , 55 🥚 (1 carton)	</h1>)}
          {order === 2 &&(   <h1> London	</h1>)}
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

{emailRedirect && order == 0 && (  <Redirect to={'/game'}/>)}

{emailRedirect && order == 1 && (  <Redirect to={'/game2'}/>)}

{emailRedirect && order == 2 && (  <Redirect to={'/game3'}/>)}

  </div>
  </div>

    )
  }
}

export default Welcome;
