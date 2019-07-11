import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    StatusBar,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default class Splash extends Component {
    render (){
        return (
                <LinearGradient colors={['#EE4B60', '#EF5090']} style={styles.linearGradient}>
                    <StatusBar backgroundColor="#EE4B60" barStyle="light-content" />
                    <Image source={require('../Assets/Images/Icons/Splash/bl_icon_white_260_41_10.png')} style={styles.logoSplash}/>
                </LinearGradient>
        );
    }

};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    logoSplash: {
        width: 170,
        height: 25,
    }
});
