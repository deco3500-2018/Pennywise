import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Modal from 'react-modal';
import Tutorial from './tutorial';
import { Button, Divider, Image, Transition, Form, Label} from 'semantic-ui-react';



class game extends Component{

  constructor(props){
    super(props);
    this.state = {
      useranswer1: "",
      useranswer2: "",
      useranswer3: "",
      answer1:"expenses",
      answer2:"items",
      answer3:"struggle"
    }

    this.handleChange = this.handleChange.bind(this);

  }

  async handleChange(e){
    this.setState({[e.target.name]: e.target.value});



  }


  render () {

    if (this.state.useranswer1 == this.state.answer1 && this.state.useranswer2 == this.state.answer2
    &&this.state.useranswer3 == this.state.answer3) {
    return(

      <div class="game"><h1>Jacob have a problem with spending money. Jacob have expenses that he needs to cover, but he uses his money to buy things he does not need. Afterwards, Jacob is struggling to pay his bills when he got paid.</h1>
    <div><h1>Are you still want buy this item?</h1><a  href="https://amazon.com.au/gp/cart/view.html?ref=nav_cart"><Button primary>Yes</Button></a>

  <a  href="http://www.google.com">  <Button secondary>No</Button></a></div>
</div>)
    }


        return (
          <div class="game_back">
           <div class="game">

             <h1>The observer has been emailed with the solution of the puzzle. Ask them for the solution!</h1>
             <h2>Please enter the correct words to continue the puzzle</h2>
             <Form onSubmit={this.handleSubmit}>
              <Form.Field inline>
             <input type='text' name="useranswer1" onChange={this.handleChange} placeholder='answer1' />
             </Form.Field>


             <Form.Field inline>
            <input type='text' name="useranswer2" onChange={this.handleChange} placeholder='answer2' />
            </Form.Field>


                         <Form.Field inline>
                        <input type='text' name="useranswer3" onChange={this.handleChange} placeholder='answer3' />
                        </Form.Field>
             </Form>
            </div>

          </div>
        )
    }

};

export default game
