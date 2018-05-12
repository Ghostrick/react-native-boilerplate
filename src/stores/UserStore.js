// @flow

import { observable, action } from 'mobx'

export default class UserStore {

  @observable.ref user = {
    screen_name: '',
    access_token: '',
    refresh_token: ''
  }

  @action signin = (screen_name: string, password: string) => {

    // mock
    // TODO: Call signin API

    const response_dummy = {
      screen_name: screen_name,
      access_token: '....',
      refresh_token: '....'
    }

    return Promise.resolve(response_dummy)
      .then(res => {
        return this.user = res
      })
  }


}
