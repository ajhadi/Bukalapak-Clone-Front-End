import React, { Component } from 'react';
import { Text, Image,View } from 'react-native';

class BukaMallScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../Assets/Images/Icons/img_bldown.png')} style={{margin:10,width:180,height:144}}/>
                <Text>Uff! We are currently relaunching our site!</Text>
                <Text style={{fontSize:18}}>Stay Tuned!</Text>
            </View>
        );
    }
}

export default BukaMallScreen;