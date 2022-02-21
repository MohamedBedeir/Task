import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ResturantScreen from './ResturantScreen';
import ResturantDetailsScreen from './ResturantDetailsScreen';
const AppStack = createStackNavigator({
  Resturant: ResturantScreen,
  ResturantDetails: ResturantDetailsScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);

