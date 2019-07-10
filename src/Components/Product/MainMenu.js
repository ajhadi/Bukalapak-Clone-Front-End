import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {

            };
    }
    render(){
        return(
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
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                        <Text style={styles.title}>VoucherKu</Text>
                    </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        marginTop:15,
        backgroundColor:'#FFF',
        padding:10,
        justifyContent:'center'
    },
    menu:{
        padding:5,
        marginLeft:10,
        marginRight:10,
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
    }
  });