import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    StatusBar
    } from 'react-native';
    
import TopBar       from '../Components/Navigation/TopBar';
import MainMenu     from '../Components/Product/MainMenu';
import LoopCarousel from '../Components/Product/LoopCarousel';
import FavoriteMenu from '../Components/Product/FavoriteMenu';
import CategoryMenu from '../Components/Product/CategoryMenu';

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <View>
            <TopBar navigation={this.props.navigation}/>
                <ScrollView style={styles.container}>
                    <MainMenu navigation={this.props.navigation}/>
                    <LoopCarousel/>
                    <FavoriteMenu/>
                    <CategoryMenu/>
                </ScrollView>
            </View>
        )
    }
}


/*======================StyleSheet=======================*/
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F7F7F7',
    }
});