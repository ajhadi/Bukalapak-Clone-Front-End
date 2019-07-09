import React, {Component} from 'react';
import {Image, Modal, View, TouchableOpacity, Text, StyleSheet} from "react-native";


class TopBar extends Component {
    constructor(props){
        super(props);

        this.state = {
        };
    }
  
    HomeNavigation(){
        return (
            <View style={styles.headerContainer}>
                <View style={{alignItems:'center',justifyContent:'center', flex:1}}>
                    <Text>NOTE APP</Text>
                </View>
            </View>
        );
    }

    render() {
        return(
            this.props.screen == 'Home'     ? this.HomeNavigation()     :
            this.props.screen == 'AddNote'  ? this.AddNoteNavigation()  :
            this.props.screen == 'EditNote' ? this.EditNoteNavigation() : null
        )
    }
}
export default TopBar;

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        height:50,
        backgroundColor:'#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.6,
        elevation: 3,
        alignItems:'center'
    },
  });