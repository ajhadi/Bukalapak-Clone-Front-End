/**
 * Bukalapak Clone Frontend
 * 
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

//Import Navigations
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';

import { Image, StyleSheet } from 'react-native';

//Import Screens
import HomeScreen from './src/Screens/Home';
import DiscoverScreen from './src/Screens/Discover';
import BukaMallScreen from './src/Screens/BukaMall';
import TransactionScreen from './src/Screens/Transaction';
import AccountScreen from './src/Screens/Account';                       //If Login
// import AccountNotLoginScreen from './src/Screens/AccountNotLogin';    //If not login
// import LoginModal from './src/Screens/LoginModal';                    //Not login and select Login
// import RegisterModal from './src/Screens/RegisterModal';              //Not login and select register
// import ProductListScreen from './src/Screens/ProductList';            //Display when search product 
import WishlistScreen from './src/Screens/Wishlist';
import ProductDetail from './src/Screens/ProductDetail';

//Import Components
import TopBar from './src/Components/Navigation/TopBar';


const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Home',
        tabBarIcon: ({ focused }) => (
          focused ?
            <Image style={styles.icon} source={require('./src/Assets/Images/Icons/Nav/ic_homenav_red.png')} /> :
            <Image style={styles.icon} source={require('./src/Assets/Images/Icons/Nav/ic_homenav.png')} />
        ),
      }),
    },
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        title: 'Discover',
        tabBarIcon: ({ focused }) => (
          focused ?
            <Image style={styles.icon} source={require('./src/Assets/Images/Icons/Nav/ic_discover_nav.png')} /> :
            <Image style={styles.icon} source={require('./src/Assets/Images/Icons/Nav/ic_discover_nav_red.png')} />
        ),
      },
    },
    BukaMall: {
      screen: BukaMallScreen,
      navigationOptions: {
        title: 'BukaMall',
        tabBarIcon: ({ focused }) => (
          focused ?
            <Image style={styles.icon} source={require('./src/Assets/Images/Icons/Nav/ic_bukamall_nav_red.png')} /> :
            <Image style={styles.icon} source={require('./src/Assets/Images/Icons/Nav/ic_bukamall_nav.png')} />
        ),
      },
    },
    Transaction: {
      screen: TransactionScreen,
      navigationOptions: {
        title: 'Transaction',
        tabBarIcon: ({ focused }) => (
          focused ?
            <Image style={styles.icon} source={require('./src/Assets/Images/Icons/Nav/ic_trans_nav_red.png')} /> :
            <Image style={styles.icon} source={require('./src/Assets/Images/Icons/Nav/ic_trans_nav.png')} />
        ),
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        title: 'Account',
        tabBarIcon: ({ focused }) => (
          focused ?
            <Image style={styles.icon} source={require('./src/Assets/Images/Icons/Nav/ic_account_nav_red.png')} /> :
            <Image style={styles.icon} source={require('./src/Assets/Images/Icons/Nav/ic_account_nav.png')} />
        ),
      },
    },
  }
);

const StackNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: ({navigation}) => ({
      header: (null),
    })
  },
  Wishlist: {
    screen: WishlistScreen,
    navigationOptions: ({navigation}) => ({
      header:(<TopBar navigation={navigation} screen={'Home'} />)
    }),
  },
  ProductDetail: {
    screen: ProductDetail,
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
    width: 25,
    height: 25,
  }
});