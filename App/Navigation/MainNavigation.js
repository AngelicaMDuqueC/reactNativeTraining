import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import WelcomeScreen from '../Screens/WelcomeScreen';
import StarwarsScreen from '../Screens/StarwarsScreen';
import CatScreen from '../Screens/CatScreen';

const MainNavigation = createBottomTabNavigator(
  {
    StarwarsScreen: { screen: StarwarsScreen },
    WelcomeScreen: { screen: WelcomeScreen },
    CatScreen: { screen: CatScreen }
  },
  {
    initialRouteName: 'WelcomeScreen'
  }
);

export default MainNavigation;
