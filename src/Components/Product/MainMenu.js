import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

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
                        <Image source={require('../../Assets/Images/Icons/ic_1.png')} style={styles.icon}/>
                        <Text style={styles.title}>BukaMart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/Icons/ic_2.png')} style={styles.icon}/>
                        <Text style={styles.title}>Gratis Ongkir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/Icons/ic_3.png')} style={styles.icon}/>
                        <Text style={styles.title}>VoucherKu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} onPress={() => { this.props.navigation.navigate('Wishlist', this.props.data)}}>
                        <Image source={require('../../Assets/Images/Icons/ic_4.png')} style={styles.icon}/>
                        <Text style={styles.title}>Barang Favorite</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:15,
        marginLeft:5,
        marginRight:5,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor:'#FFF',
        flexDirection:'row',
    },
    menu:{
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    icon:{
        width: 40,
        height: 40,
    },
    title:{
        marginTop:15,
        fontSize:11
    },
});