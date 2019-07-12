import React, {Component} from 'react';
import {
    Image,
    Modal,
    View,
    TouchableOpacity,
    Text, 
    StyleSheet,
    StatusBar,
    } from "react-native";


class TopBar extends Component {
    constructor(props){
        super(props);

        this.state = {
        };
    }
  
    HomeNavigation(){
        return (
            <View style={styles.headerContainer}>

                <TouchableOpacity style={styles.searchButton}>
                    <Image source={require('../../Assets/Images/Icons/ico_search.png')} style={{opacity:0.6,height:20,width:20,}}/>
                    <Image source={require('../../Assets/Images/bl_icon_gray_260_41_10.png')} style={{height:14}}/>
                </TouchableOpacity>

                <View style={styles.rightIcons}>
                    <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                    <TouchableOpacity style={styles.iconFill}>
                        <Image source={require('../../Assets/Images/Icons/ico_scan_barcode.png')} style={styles.barIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconFill}>
                        <Image source={require('../../Assets/Images/Icons/ico_notification_minor.png')} style={styles.barIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconFill}>
                        <Image source={require('../../Assets/Images/Icons/ico_comment_minor.png')} style={styles.barIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Cart')} style={styles.iconFill}>
                        <Image source={require('../../Assets/Images/Icons/ico_cart.png')} style={styles.barIcon}/>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

    render() {
        return(
            this.HomeNavigation()
        )
    }
}

export default TopBar;

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
    },
    searchButton:{
        flex:1,
        flexDirection:'row',
        alignContent:'center',
        marginLeft:15,
        borderRadius:5,
        padding:10,
        backgroundColor:'#F7F7F7'
    },
    rightIcons:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        marginRight:12
    },
    barIcon:{
        width:25,
        height:25,
        opacity:0.6,
        alignSelf:'center'
    },
    iconFill:{
        height:35,
        width:35,
        borderRadius:19,
        justifyContent:'center',
    }
  });