import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default class Splash extends Component {
    render (){
        return (
                <LinearGradient colors={['#EE4B60', '#EF5090']} style={styles.linearGradient}>
                    <Image source={require('../Assets/Images/ic_launchscreen_logo_white.png')} style={styles.logoSplash}/>
                    <StatusBar backgroundColor="#EE4B60" barStyle="light-content" />
                </LinearGradient>
         );
     }
  
};

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignContent:'center',
        justifyContent:'center',
      },
      logoSplash: {
          alignSelf:'center',
      }
});
