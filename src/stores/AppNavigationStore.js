// @flow

import { observable, action } from 'mobx'
import AppNavigator from '../navigator/AppNavigator'

export default class AppNavigationStore {

  @observable.ref navigation = null

  @observable.ref navigationState = {
    index: 0,
    routes: [
      {
        key: 'Signin',
        routeName: 'Signin',
        params: { title: 'Signin' }
      }
    ]
  }

  @action dispatch = (action: any, stackNavState: boolean = true) => {
    const previousNavState = stackNavState ? this.navigationState : null
    const newState = (this.navigationState = AppNavigator.router.getStateForAction(
      action,
      previousNavState
    ))
    return true
  }

  @action setNavigation = (navigation: any) => {
    this.navigation = navigation
  }

}
