import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    } from 'react-native';

import MainMenu from '../Components/Product/MainMenu';


export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
      }

    render(){
        return(
            <ScrollView style={styles.container}>
                <MainMenu navigation={this.props.navigation}/>
            </ScrollView>
        )
    }
}


/*======================StyleSheet=======================*/
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F7F7F7',
    }
});