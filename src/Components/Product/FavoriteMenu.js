import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
}
from 'react-native';

export default class FavoriteMenu extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:1,paddingHorizontal:15,paddingVertical:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold',margin:5}}>Menu Favorit</Text> 
                </View> 
                <View style={{flex:1,flexDirection:'row',paddingHorizontal:15}}>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/Menu/bukadonasi.jpg')} style={styles.icon}/>
                        <Text numberOfLines={1} style={styles.title}>BukaDonasi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/Menu/tiketkereta.jpg')} style={styles.icon}/>
                        <Text numberOfLines={1} style={styles.title}>Tiket Kereta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/Menu/paketdata.jpg')} style={styles.icon}/>
                        <Text numberOfLines={1} style={styles.title}>Paket Data</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/Menu/zakat.jpg')} style={styles.icon}/>
                        <Text numberOfLines={1} style={styles.title}>Zakat</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,flexDirection:'row',paddingHorizontal:15}}>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/Menu/bukaquran.jpg')} style={styles.icon}/>
                        <Text numberOfLines={1} style={styles.title}>BukaQuran</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/Menu/bukaemas.jpg')} style={styles.icon}/>
                        <Text numberOfLines={1} style={styles.title}>BukaEmas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/Menu/bukadompet.jpg')} style={styles.icon}/>
                        <Text numberOfLines={1} style={styles.title}>BukaDompet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/Menu/bpjs.jpg')} style={styles.icon}/>
                        <Text numberOfLines={1} style={styles.title}>BPJS</Text>
                    </TouchableOpacity>
                </View>     
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:15,
        backgroundColor:'#FFF',
    },
    menu:{
        padding:5,
        flex: 1,
        marginHorizontal:10,
        alignItems: 'center',
        justifyContent:'center'
    },
    icon:{
        width: 40,
        height: 40,
    },
    title:{
        marginTop:15,
        fontSize: 11,
    },
    image: {
        height: 145,
        borderRadius: 10
    },
});