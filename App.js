/**
 * Bukalapak Clone Frontend
 * 
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

//Import Navigation
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './src/Screens/Home';

import TopBar from './src/Components/Navigation/TopBar';

const StackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      header:(<TopBar navigation={navigation} screen={'Home'}/>)
    }),
  },
  Cart: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      header:(null)
    }),
  },
});

const AppContainer = createAppContainer(StackNavigator);

export default class App extends Component {
  render(){
    return(
        <AppContainer />
    )
  }
}