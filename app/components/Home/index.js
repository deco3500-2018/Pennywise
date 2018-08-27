import React ,{Component} from 'react';
import {View, TextInput, Text, Button, Alert } from 'react-native';
import styles from './style';



class Home extends Component{

  state = {username:"", password:""}

  static navigationOptions = {
    header: null
  }
  checkLogin(){
    const {username, password} = this.state
    // if(username == 'admin' && password == 'admin'){
      fetch('http://127.0.0.1:8081', {method:'POST',body: JSON.stringify({username,password})})
      .then(res =>{
        return res.text();
      })
      .then(res => {
        if (res === '1'){
          this.props.navigation.navigate('dashboard')
        }else{
          Alert.alert('Error', 'Username or Password wrong', [{text:'Okay'}])
        }

    })
  }
    // } else {
    //   Alert.alert('Error', 'Username or Password wrong', [{text:'Okay'}]);
    // }


  render () {
    const {heading, input, parent} = styles

    return (
      <View style={parent}>
        <Text style = {heading}>Login into the application</Text>
        <TextInput style = {input} placeholder="Username" onChangeText={text => this.setState({username: text})}/>
        <TextInput style = {input} placeholder="Password" secureTextEntry={true} onChangeText={text=>this.setState({password:text})}/>
        <Button title = {"Login"} onPress={_ => this.checkLogin()}/>
      </View>

    )
  }

}


export default Home
