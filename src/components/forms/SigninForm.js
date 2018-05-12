// @flow
import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

import styles from '../../styles/Common.styl'


export default class SigninForm extends Component<any, any> {

  state: {
    screen_name: string,
    password: string
  }

  constructor(){
    super()
    this.state = {
      screen_name: '',
      password: ''
    }
  }

  onSubmit(){
    this.props.onSubmit ?
      this.props.onSubmit(this.state.screen_name, this.state.password) :
      null
  }

  render(){
    return (
      <View>
        <View style={styles.inputItem}>
          <Text style={styles.inputDesc}>screen_name</Text>
          <TextInput
            style={styles.input}
            value={this.state.screen_name}
            onChangeText={ screen_name => this.setState({screen_name}) }
          />
        </View>

        <View style={styles.inputItem}>
          <Text style={styles.inputDesc}>password</Text>
          <TextInput
            style={styles.input}
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={ password => this.setState({password}) }
          />
        </View>

        <TouchableOpacity style={styles.submit} onPress={this.onSubmit.bind(this)}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

