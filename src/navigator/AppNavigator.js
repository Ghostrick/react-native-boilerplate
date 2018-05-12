// @flow
import { createStackNavigator } from 'react-navigation'

import SignupScreen from '../components/SigninScreen'
import HomeScreen from '../components/HomeScreen.js'

const routes = {
  Signin: { screen: SignupScreen },
  Home: { screen: HomeScreen }
}

const stackConfig = {
  initialRouteName: 'Signin',
  navigationOptions: ({ navigation: { state } }) => ({
    title: state.params && state.params.title
  })
}

export default createStackNavigator(routes, stackConfig)
