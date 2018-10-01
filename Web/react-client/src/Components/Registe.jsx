import React, {Component} from 'react';
import { Button, Icon, Label } from 'semantic-ui-react'
class Registe extends Component{
  render(){
    return(
      <div>

      <div class="regist">


        <Button content='Login' primary />
        <Button content='Signup' color='pink' />
      </div>

      <div class="others">
        <Button as='div' labelPosition='right'>
      <Button color='red'>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic color='red' pointing='left'>
        1
      </Label>
    </Button></div>
    </div>

    )
  }

}

export default Registe;
