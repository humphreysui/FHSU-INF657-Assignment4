import React, { Component } from 'react';

import { StyleSheet, View, Text, TextInput, TouchableOpacity} from "react-native";

export default class App extends Component {
  state = {
    name: '',
    occupation:'',
    description: '',
  }
  handleName = (text) => {
    this.setState({ name: text })
  }
  handleOccupation = (text) => {
    this.setState({ occupation: text })
  }
  handleDescription = (text) => {
    this.setState({ description: text })
  }

  login = (name, occupation, description) => {
    console.log('name: ' + name + ' title: ' + occupation + ' bio: ' + description)
    // #TODO
     
  }

  render(){
    return(
      <View style={styles.signup}>
        <Text style={styles.header}>Sign Up</Text>
        <TextInput style={styles.textInput} placeholder="Your Name :" onChangeText={this.handleName}></TextInput>
        <TextInput style={styles.textInput} placeholder="Your Title :" onChangeText={this.handleOccupation}></TextInput>
        <TextInput style={styles.textInput} placeholder="Your Bio :" onChangeText={this.handleDescription}></TextInput>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => this.login(this.state.name, this.state.occupation, this.state.description)
          }>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signup:{
    paddingLeft:60,
    paddingRight:60,
    alignSelf:'stretch',
     
  },
  header:{
    fontSize:24,
    color:'black',
    paddingBottom:10,
    marginBottom:20,
    fontWeight:'bold',
    borderColor: 'white',
  },
  textInput:{
    alignSelf:'stretch',
    height:40,
    marginBottom:30,
    color:'black',
    borderBottomColor:'black',
    borderWidth:2,
    borderColor: 'white',
    paddingLeft:10,
    
  },
  submitButton: {
    backgroundColor: 'lightsalmon',
    padding: 10,
    width:100,
    marginBottom:50,
    marginTop:50,
    height: 40,
    borderRadius:10,
  },
  submitButtonText: {
    color: 'white',
    fontWeight:'bold',
    alignSelf:'center',
  }
});