import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';
import Registe from './Registe';
import Welcome from './Welcome';
import Game from './Game';
import tutorial from './tutorial';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
//

class Tutorial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoUrl: 'http://localhost/Pennywise/public/slow.mp4',
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {

    return (<div>
      <div class="tutorial">
        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={{}} contentLabel="Tutorial modal">
          <div class='tutorial_content'>

            <Button color="grey" animated='vertical' onClick={this.closeModal}>

              <Button.Content visible="visible">
                <Icon name='close'/>
              </Button.Content>
            </Button>
            <h2 ref={subtitle => this.subtitle = subtitle}>Welcome to Puzzle Pay</h2>

            <h5>Puzzle Pay can help you deal with inpulsive spending</h5>
            <h5>Here is how to use it</h5>
            <h5>Puzzle Pay will automatically opens when you checkout on online shopping page</h5>
            <img src="http://localhost/Pennywise/public/cart.png"/>
            <h5>Input your Observer's Email in the input text field and proceed by clicking the red arrow</h5>
            <h5>You will be greeted with a puzzle. The solution of the puzzle will be sent to the observer</h5>
            <h5>The puzzle difficulty will be based on the total amount of your cart</h5>
            <h5>Have fun!</h5>
          </div>
        </Modal>

        <Button color="teal" animated='vertical' id="modalButton" onClick={this.openModal}>
          <Button.Content hidden="hidden">Tutorial</Button.Content>
          <Button.Content visible="visible">
            <Icon name='question circle'/>
          </Button.Content>
        </Button>
      </div>

      <video id="background-video" style={{
          zIndex: 0
        }} loop="loop" autoPlay="autoPlay" muted="muted">
        <source src={this.state.videoUrl} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

    </div>)
  }

};

export default Tutorial;
