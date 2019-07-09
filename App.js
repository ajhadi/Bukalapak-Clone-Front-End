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
  createBottomTabNavigator
} from 'react-navigation';

import { Image, StyleSheet } from 'react-native';

import HomeScreen from './src/Screens/Home';
import TransactionScreen from "./src/Screens/Transaction";

import TopBar from './src/Components/Navigation/TopBar';


const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Home',
        tabBarIcon: ({ focused }) => (
          focused ?
            <Image style={styles.icon} source={require('./src/Assets/Icons/abc_btn_radio_to_on_mtrl_015.png')} /> :
            <Image style={styles.icon} source={require('./src/Assets/Icons/abc_btn_radio_to_on_mtrl_000.png')} />
        ),
      }),
    },
    Transaction: {
      screen: TransactionScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Transaction',
        tabBarIcon: ({ focused }) => (
          focused ?
            <Image style={styles.icon} source={require('./src/Assets/Icons/abc_btn_radio_to_on_mtrl_015.png')} /> :
            <Image style={styles.icon} source={require('./src/Assets/Icons/abc_btn_radio_to_on_mtrl_000.png')} />
        ),
      }),
    },
  }
);

const StackNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: ({navigation}) => ({
      header: (<TopBar navigation={navigation} screen={'Home'} />),
    })
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


const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
  }
});