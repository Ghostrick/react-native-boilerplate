// @flow
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../styles/Common.styl'
import { actions } from '../stores/Stores'

import SigninForm from '../components/forms/SigninForm'

export default (props: any) => {

  const { navigate } = props.navigation

  return (
    <View style={styles.container}>
      <SigninForm onSubmit={actions.signin} />
    </View>
  )
}
