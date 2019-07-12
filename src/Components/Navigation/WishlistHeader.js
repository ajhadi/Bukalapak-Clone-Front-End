import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    TextInput,
    Image,
    StyleSheet,
    StatusBar,
} from "react-native";

export default class WishlistHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:'',
        };
    }


    render() {
        return (
            <View style={styles.headerContainer}>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content"/>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image style={{marginLeft: 2, width: 28, height: 28, opacity: 0.9}}
                           source={require('../../Assets/Images/Icons/ico_back_android.png')}/>
                </TouchableOpacity>
                <View style={{flex:1}}>
                    <Text style={{color:'#333', fontSize:20,marginLeft:20}}>Barang Favorit</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')} style={styles.iconFill}>
                    <Image source={require('../../Assets/Images/Icons/ico_cart.png')} style={styles.barIcon}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.6,
        elevation: 3,
        alignItems: 'center',
        padding: 10
    },
    barIcon:{
        width:25,
        height:25,
        opacity:0.6,
        alignSelf:'center'
    },
    iconFill:{
        marginLeft:10,
        height:35,
        width:35,
        borderRadius:19,
        justifyContent:'center',
    },
});