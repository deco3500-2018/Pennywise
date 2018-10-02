import React, {Component} from 'react';
import {Button, Icon, Label, Checkbox, Form} from 'semantic-ui-react';
import {GoogleLogin} from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

class Registe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textcolor: 'White',
      inputwidth: '256 px'
    }
  }

  render() {

    document.getElementById('googleButton')
    return (<div>

      <div id="googleButton">

        <GoogleLogin clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com" buttonText="Login with Google" onSuccess={responseGoogle} onFailure={responseGoogle}/>
      </div>

      <div class="main-form">
        <Form>
          <Form.Field>
            <label style={{
                color: this.state.textcolor
              }}>User name</label>
            <input type='text' style={{
                width: "300px"
              }} placeholder='User name'/>
          </Form.Field>
          <Form.Field>
            <label style={{
                color: this.state.textcolor
              }}>Password</label>
            <input type='password' style={{
                width: "300px"
              }} placeholder='Password'/>
          </Form.Field>
          <Button content='Login' primary="primary"/>
          <Button content='Signup' color='pink'/>
        </Form>
      </div>
      <div class="likes">
        <Button as='div' labelPosition='right'>
          <Button color='red'>
            <Icon name='heart'/>
            Like
          </Button>
          <Label as='a' basic="basic" color='red' pointing='left'>
            1
          </Label>
        </Button>
      </div>
    </div>)
  }

}

export default Registe;
