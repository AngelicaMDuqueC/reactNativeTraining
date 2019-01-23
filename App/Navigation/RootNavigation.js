import { createStackNavigator, createAppContainer } from 'react-navigation'
import MainNavigation from './MainNavigation'
import CatScreen from '../Screens/CatScreen'

const RootNavigation = createStackNavigator(
  {
    Main: { screen: MainNavigation },
    CatModal: { screen: CatScreen },
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
  }
)

export default createAppContainer(RootNavigation)
