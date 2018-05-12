// @flow
import React from 'react'
import { Text, View } from 'react-native'
import Expo from 'expo'
import { observer, Provider } from 'mobx-react/native'
import addNavigationHelpers from 'react-navigation/src/addNavigationHelpers'

import AppNavigator from '../navigator/AppNavigator'

import { stores } from '../stores/Stores'

const App = observer(props => {

  const navigation = addNavigationHelpers({
    dispatch: stores.appNavigation.dispatch,
    state: stores.appNavigation.navigationState,
    addListener: () => {}
  })

  stores.appNavigation.setNavigation(navigation)

  return (
    <Provider {...stores}>
      <AppNavigator
        navigation={navigation}
      />
    </Provider>
  )
})

export default Expo.registerRootComponent(App)
