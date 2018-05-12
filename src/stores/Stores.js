import AppNavigationStore from './AppNavigationStore'
import UserStore from './UserStore'

const stores = {
  appNavigation: new AppNavigationStore(),
  user: new UserStore()
}

const actions = {

  signin: (screen_name: string, password: string) => {

    const { navigate } = stores.appNavigation.navigation

    stores.user.signin(screen_name, password)
      .then(user => {
        navigate('Home', {title: 'Home'})
      })

  }
}

export {stores, actions}
