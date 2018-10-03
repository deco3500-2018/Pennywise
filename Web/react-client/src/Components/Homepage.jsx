import React, {Component} from 'react';
import { Player } from 'video-react';
import {Button} from 'semantic-ui-react';

import Registe from './Registe';
//

class Homepage extends Component{

  constructor(props){
    super(props);
    this.state = {
      videoUrl:'http://localhost/Pennywise/slow.mp4'
    }
  }

  render () {
        return (

          // Video tag must include muted for video autoplay
           <div>
             <Registe/>
            <video id="background-video" style={{zIndex:1}} loop autoPlay muted>
                <source src={this.state.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            </div>
        )
    }

};

export default Homepage
