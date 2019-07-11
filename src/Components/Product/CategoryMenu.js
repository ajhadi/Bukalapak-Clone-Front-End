import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView
}
from 'react-native';

export default class CategoryMenu extends Component {
    images = [
        {uri: 'https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg'},
        {uri: 'https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg'},
        {uri: 'https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg'},
        {uri: 'https://cdn.pixabay.com/photo/2017/05/16/21/24/gorilla-2318998__340.jpg'},
    ]
    render(){
        const { images } = this;
        return(
            <View style={styles.container}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <Text style={{margin:15,fontSize:16,fontWeight:'bold'}}>Kategori Barang</Text> 
                    <TouchableOpacity>
                        <Text style={{fontSize:13,left:110,margin:15,color:'red'}}>Lihat semua</Text> 
                    </TouchableOpacity>
                </View>
                <View style={{flex:4}}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                    >   
                        <View style={{flexDirection:'row',marginLeft:10,marginRight:10}}>
                        {images.map(image => (
                            <View>
                                <TouchableOpacity>
                                    <Image style={{height:90,width:120,borderRadius:10,margin:5}} source={image} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={{height:90,width:120,borderRadius:10,margin:5}} source={image} />
                                </TouchableOpacity>
                            </View>    
                        ))}
                        </View>
                    </ScrollView>
                </View>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:15,
        backgroundColor:'#FFF',
        marginBottom:10,
        height:270
    },
    image: {
        height: 145,
        borderRadius: 10
    },
});