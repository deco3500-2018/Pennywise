import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import Registe from './Registe';
import Welcome from './Welcome';
import Game from './Game';
import Tutorial from './tutorial';
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
      videoUrl:'http://localhost/Pennywise/public/slow.mp4',
      modalIsOpen: false,
      showInfo: true
    }
  }



  render () {
    if (!sessionStorage.getItem('userData') || this.state.redirect) {
      return( <div>
        <Registe/>
       <video id="background-video" style={{zIndex:0}} loop autoPlay muted>
           <source src={this.state.videoUrl} type="video/mp4" />
           Your browser does not support the video tag.
       </video>

       </div>);
    }

    if (this.state.showInfo) {
      return ( <div><Tutorial/><Welcome/> 
    </div>);
    }


    }

};

export default Homepage
