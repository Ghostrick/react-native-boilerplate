// @flow
import React from 'react'
import { inject, observer } from 'mobx-react/native'
import { Text, View } from 'react-native'
import styles from '../styles/Common.styl'
import { stores } from '../stores/Stores'


export default inject('user')(observer((props: any) => {
  return (
    <View style={styles.container}>
      <Text>Hello!! {props.user.user.screen_name}</Text>
    </View>
  )
}))
