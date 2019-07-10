import React, { Component } from 'react';
import { Text, View,StyleSheet,ImageBackground,Image, Dimensions, TouchableOpacity} from 'react-native';

class WishlistProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:this.props.data,
            filter:'Semua',
            width: Dimensions.get('window').width,
            rate:[1,1,1,0,0]
        };
        Dimensions.addEventListener('change', (e) => {
            this.setState(e.window);
        });
    }
    
    render() {
        return (
            <View style={{width:this.state.width/2}}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductDetail', this.props.data)}}>
                    <View style={{
                        width:'100%',
                        height:this.state.width*1.1,
                        borderWidth:1,
                        borderColor:'#F1F1F1',
                        borderTopColor:'#F9F9F9'}}>
                            <ImageBackground style={{alignItems:'flex-end',width: (this.state.width/2)-2,height: (this.state.width/2)-2}} 
                            source={require('../../Assets/DummyData/Image/air-jordan-7-retro-sp-shoe.jpg')}>
                                <TouchableOpacity onPress={()=> alert('delete wishlist')} style={{zIndex:1,margin:10,alignItems:'center',justifyContent:'center',backgroundColor:'#FFF', width:28,height:28,borderRadius:14,padding:3}}>
                                    <Image source={require('../../Assets/Images/Icons/ico_heart_red.png')} style={{width:18,height:18}}/>
                                </TouchableOpacity>
                            </ImageBackground>
                            <View style={{padding:10}}>
                            <View style={{height:this.state.width*0.35}}>
                                <Text numberOfLines={2} style={{fontSize:14, color:'#000'}}> {this.state.data.name} </Text>
                                <Text numberOfLines={2} style={{fontSize:13, color:'#888', marginTop:20, textDecorationLine: 'line-through',}}> {this.state.data.price} </Text>
                                <Text numberOfLines={2} style={{fontSize:14, color:'#F00'}}> {this.state.data.price} </Text>
                                <Text numberOfLines={2} style={{fontSize:10, color:'green'}}> Cicilan mulai 100rb/bln </Text>
                                <View style={{flexDirection:'row',}}>
                                    {this.state.rate.map((star) =>
                                        <Image style={{width: 10,height:10}} source={require('../../Assets/Images/Icons/abc_ic_star_black_36dp.png')}/>
                                    )}
                                    <Text style={{marginLeft:5,fontSize:9,color:'#333'}}>(283)</Text>
                                </View>
                            </View>
                            
                            <View style={{ borderTopWidth:1, borderTopColor:'#888',padding:5,height:this.state.width*0.2,width:'100%'}}>
                                <Text style={{color:'#888', fontSize:12}}>{this.state.data.seller}</Text>
                                <Text style={{color:'#888', fontSize:10, marginBottom:4}}>1000 rating</Text>
                                <TouchableOpacity onPress={()=> alert('Beli')}  style={{padding:5,backgroundColor: 'red', alignSelf:'center', alignItems:'center', width:'100%'}}>
                                    <Text style={{color:'#FFF'}}>Beli</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


export default WishlistProduct;