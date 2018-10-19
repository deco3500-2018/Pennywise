import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Modal from 'react-modal';
import Tutorial from './tutorial';
import {
  Button,
  Divider,
  Image,
  Transition,
  Form,
  Label
} from 'semantic-ui-react';

const image1 = "http://localhost/pennywise/public/random1.jpg";

class game2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      useranswer1: "",
      useranswer2: "",
      useranswer3: "",
      answer1: "2",
      answer2: "3",
      answer3: "6"
    }

    this.handleChange = this.handleChange.bind(this);

  }

  async handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

  }

  render() {

    if (this.state.useranswer1 == this.state.answer1 && this.state.useranswer2 == this.state.answer2 && this.state.useranswer3 == this.state.answer3) {
      return (<div class="game">
        <h1>John is having a hard time to control his spending free. He often ran into trouble with the debit card that he got, and have to go to the bank to straighten things out. He had too much shopping, as it is his biggest vices. He needs to get a handle on his behaviour. Shopping only makes him happy for a while, then he regret the things he bought.</h1>
        <div>
          <h1>Are you still want buy this item?</h1>
          <a href="https://amazon.com.au/gp/cart/view.html?ref=nav_cart">
            <Button primary="primary">Yes</Button>
          </a>

          <a href="http://www.google.com">
            <Button secondary="secondary">No</Button>
          </a>
        </div>
      </div>)
    }

    return (<div class="game_back">
      <div class="game">

        <h1>The observer has been emailed with the solution of the puzzle. Ask them for the solution!</h1>
        <h2>Please enter the correct words to continue the puzzle</h2>
          <Image.Group size='small'>
                <Image src={"http://localhost/pennywise/public/random1.jpg"} />
                <Image src={"http://localhost/pennywise/public/debit.png"} />
                <Image src={"http://localhost/pennywise/public/regret.jpg"} />
                <Image src={"http://localhost/pennywise/public/random2.jpg"} />
                <Image src={"http://localhost/pennywise/public/random3.jpg"} />
                <Image src={"http://localhost/pennywise/public/vices.jpg"} />
              </Image.Group>

        <Form onSubmit={this.handleSubmit}>
          <Form.Field inline="inline">
            <input type='text' name="useranswer1" onChange={this.handleChange} placeholder='answer1'/>
          </Form.Field>

          <Form.Field inline="inline">
            <input type='text' name="useranswer2" onChange={this.handleChange} placeholder='answer2'/>
          </Form.Field>

          <Form.Field inline="inline">
            <input type='text' name="useranswer3" onChange={this.handleChange} placeholder='answer3'/>
          </Form.Field>
        </Form>
      </div>

    </div>)
  }

};

export default game2
