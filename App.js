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

import {Image, StyleSheet} from 'react-native';

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
import CartScreen from './src/Screens/Cart';
import EditProfileScreen from './src/Screens/EditProfile';
import CheckoutScreen from './src/Screens/Checkout';

//Import Components
import TopBar from './src/Components/Navigation/TopBar';

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Home',
                tabBarIcon: ({focused}) => (
                    focused ?
                        <Image style={styles.icon}
                               source={require('./src/Assets/Images/Icons/Nav/ic_homenav_red.png')}/> :
                        <Image style={styles.icon} source={require('./src/Assets/Images/Icons/Nav/ic_homenav.png')}/>
                ),
                tabBarOptions: {
                    activeTintColor: '#D71149',
                    style: {
                        paddingVertical: 6,
                    },
                    keyboardHidesTabBar: true,
                }
            }),
        },
        Discover: {
            screen: DiscoverScreen,
            navigationOptions: {
                title: 'Discover',
                tabBarIcon: ({focused}) => (
                    focused ?
                        <Image style={styles.icon}
                            source={require('./src/Assets/Images/Icons/Nav/ic_discover_nav_red.png')}/> :
                        <Image style={styles.icon}
                               source={require('./src/Assets/Images/Icons/Nav/ic_discover_nav.png')}/>
                ),
                tabBarOptions: {
                    activeTintColor: '#D71149',
                    style: {
                        paddingVertical: 6,
                    },
                    keyboardHidesTabBar: true,
                }
            },
        },
        BukaMall: {
            screen: BukaMallScreen,
            navigationOptions: {
                title: 'BukaMall',
                tabBarIcon: ({focused}) => (
                    focused ?
                        <Image style={styles.icon}
                               source={require('./src/Assets/Images/Icons/Nav/ic_bukamall_nav_red.png')}/> :
                        <Image style={styles.icon}
                               source={require('./src/Assets/Images/Icons/Nav/ic_bukamall_nav.png')}/>
                ),
                tabBarOptions: {
                    activeTintColor: '#D71149',
                    style: {
                        paddingVertical: 6,
                    },
                    keyboardHidesTabBar: true,
                }
            },
        },
        Transaction: {
            screen: TransactionScreen,
            navigationOptions: {
                title: 'Transaction',
                tabBarIcon: ({focused}) => (
                    focused ?
                        <Image style={styles.icon}
                               source={require('./src/Assets/Images/Icons/Nav/ic_trans_nav_red.png')}/> :
                        <Image style={styles.icon} source={require('./src/Assets/Images/Icons/Nav/ic_trans_nav.png')}/>
                ),
                tabBarOptions: {
                    activeTintColor: '#D71149',
                    style: {
                        paddingVertical: 6,
                    },
                    keyboardHidesTabBar: true,
                }
            },
        },
        Account: {
            screen: AccountScreen,
            navigationOptions: {
                title: 'Account',
                tabBarIcon: ({focused}) => (
                    focused ?
                        <Image style={styles.icon}
                               source={require('./src/Assets/Images/Icons/Nav/ic_account_nav_red.png')}/> :
                        <Image style={styles.icon}
                               source={require('./src/Assets/Images/Icons/Nav/ic_account_nav.png')}/>
                ),
                tabBarOptions: {
                    activeTintColor: '#D71149',
                    style: {
                        paddingVertical: 6,
                    },
                    keyboardHidesTabBar: true,
                }
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
    Account: {
        screen: AccountScreen,
        navigationOptions: ({navigation}) => ({
            header: (null)
        }),
    },
    Wishlist: {
        screen: WishlistScreen,
        navigationOptions: ({navigation}) => ({
            header: (<TopBar navigation={navigation} screen={'Home'}/>)
        }),
    },
    ProductDetail: {
        screen: ProductDetail,
        navigationOptions: ({navigation}) => ({
            header: (null)
        }),
    },
    Cart: {
        screen: CartScreen,
        navigationOptions: ({navigation}) => ({
            header: (null)
        }),
    },
    EditProfile: {
        screen: EditProfileScreen,
        navigationOptions: ({navigation}) => ({
            header: (null)
        }),
    },
    ProductDetail: {
        screen: ProductDetail,
        navigationOptions: ({navigation}) => ({
            header: (null)
        }),
    },
    Checkout: {
        screen: CheckoutScreen,
        navigationOptions: ({navigation}) => ({
            header: (null)
        }),
    },
});

const AppContainer = createAppContainer(StackNavigator);
import {Provider} from 'react-redux';
import configStore from './src/Services/Redux/store';
import {PersistGate} from "redux-persist/integration/react";
import LoginModal from "./src/Screens/LoginModal";
import AccountNotLogin from "./src/Screens/AccountNotLogin";

const {persistor, store} = configStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppContainer/>
                </PersistGate>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
    }
});