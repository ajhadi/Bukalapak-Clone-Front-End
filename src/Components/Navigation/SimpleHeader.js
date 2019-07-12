import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    } from "react-native";


export default class SimpleHeader extends Component {
    constructor(props){
        super(props);

        this.state = {
            title : this.props.title,
        };
    }

    render() {
        return(
            <View style={styles.headerContainer}>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                 <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image style={{marginLeft:2,width:28,height:28, opacity:0.9}} source={require('../../Assets/Images/Icons/ico_back_android.png')}/>
                </TouchableOpacity>
                <View style={{ alignItems:'center',flex:1,marginRight:30}}>
                    <Text style={{fontSize:18,fontWeight:'400', color:'#222'}}>{this.state.title}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer:{
        height:60,
        flexDirection:'row',
        backgroundColor:'#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.6,
        elevation: 3,
        alignItems:'center',
        padding:10
    },
  });