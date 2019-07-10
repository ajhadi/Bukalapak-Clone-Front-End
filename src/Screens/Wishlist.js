import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    StyleSheet,
} from 'react-native';

class WishlistScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor:'#F5F5F5'}}>
                <View style={styles.search}>
                    <Image source={require('../Assets/Images/Icons/ico_search.png')} style={{height:20,width:20,}}/>
                    <TextInput style={styles.searchInput}/>
                </View>
            </View>
        );
    }
}

export default WishlistScreen;

const styles = StyleSheet.create({
    search:{
        backgroundColor:'#FFF',
    }
});