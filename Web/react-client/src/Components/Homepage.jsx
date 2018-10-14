import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import Registe from './Registe';
import Welcome from './Welcome';
import tutorial from './tutorial';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
//

class Homepage extends Component{

  constructor(props){
    super(props);
    this.state = {
      videoUrl:'http://localhost/Pennywise/slow.mp4',
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

  render () {
    if (!sessionStorage.getItem('userData') || this.state.redirect) {
      return( <div>
        <Registe/>
       <video id="background-video" style={{zIndex:1}} loop autoPlay muted>
           <source src={this.state.videoUrl} type="video/mp4" />
           Your browser does not support the video tag.
       </video>

       </div>);
    }
        return (

          // Video tag must include muted for video autoplay
           <div>
             <Welcome/>
               <div class="introduction">
                 <button onClick={this.openModal}>Open Modal</button>
                 <Modal
                   isOpen={this.state.modalIsOpen}
                   onAfterOpen={this.afterOpenModal}
                   onRequestClose={this.closeModal}
                   style={customStyles}
                   contentLabel="Example Modal"
                 >

                   <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                   <button onClick={this.closeModal}>close</button>
                   <div>I am a modal</div>
                   <form>
                     <input />
                     <button>tab navigation</button>
                     <button>stays</button>
                     <button>inside</button>
                     <button>the modal</button>
                   </form>
                 </Modal>
               </div>

            <video id="background-video" style={{zIndex:0}} loop autoPlay muted>
                <source src={this.state.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            </div>
        )
    }

};

export default Homepage
