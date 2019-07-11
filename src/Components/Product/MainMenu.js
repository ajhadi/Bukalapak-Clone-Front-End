import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import LoopCarousel from './LoopCarousel';
import FavoriteMenu from './FavoriteMenu';
import CategoryMenu from './CategoryMenu';

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                        <Text style={styles.title}>VoucherKu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                        <Text style={styles.title}>VoucherKu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                        <Text style={styles.title}>VoucherKu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} onPress={() => { this.props.navigation.navigate('Wishlist', this.props.data)}}>
                        <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                        <Text style={styles.title}>Barang Favorite</Text>
                    </TouchableOpacity>
                </View>
                <LoopCarousel/>
                <FavoriteMenu/>
                <CategoryMenu/>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:15,
        backgroundColor:'#FFF',
        flexDirection:'row',
        paddingHorizontal:15
    },
    menu:{
        padding:5,
        marginHorizontal:10,
        alignContent:'center',
        justifyContent:'center'
    },
    icon:{
        width:60,
        height:60,
    },
    title:{
        marginTop:15,
        fontSize:11
    },
});