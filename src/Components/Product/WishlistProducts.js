import React, { Component } from 'react';
import { Text, View,StyleSheet,ImageBackground,Image, Dimensions, TouchableOpacity} from 'react-native';
import {addWishList, deleteWishList} from "../../Services/Axios/wishlist";
import {withNavigation} from "react-navigation";
import {connect} from "react-redux";

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

    toRate(int) {
        let rate = [];
        for (let i = 0; i < int; i++) {
            rate.push(1)
        }
        for (let i = rate.length; i < 4; i++) {
            rate.push(0)
        }
        return rate;
    }

    addWishlist(id) {
        this.props.dispatch(addWishList(id,this.props.account.token));
    }
    deleteWishlist(id){
        this.props.dispatch(deleteWishList(id,this.props.account.token));
    }


    render() {
        let data = this.props.data.product;

        return (
            <View key={this.state.data.id} style={{width:this.state.width/2}}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductDetail', data)}}>
                    <View style={{
                        width:'100%',
                        height:this.state.width*1.1,
                        borderWidth:1,
                        borderColor:'#F1F1F1',
                        borderTopColor:'#F9F9F9'}}>
                            <ImageBackground style={{alignItems:'flex-end',width: (this.state.width/2)-2,height: (this.state.width/2)-2}} 
                            source={{uri : data.image[0]}}>
                                <TouchableOpacity onPress={()=> this.deleteWishlist(this.props.data._id)} style={{zIndex:1,margin:10,alignItems:'center',justifyContent:'center',backgroundColor:'#FFF', width:28,height:28,borderRadius:14,padding:3}}>
                                    <Image source={require('../../Assets/Images/Icons/ic_favfilled.png')} style={{width:18,height:18}}/>
                                </TouchableOpacity>
                            </ImageBackground>
                            <View style={{padding:10}}>
                            <View style={{height:this.state.width*0.35}}>
                                <Text numberOfLines={2} style={{fontSize:14, color:'#000'}}> {data.name} </Text>
                                <Text numberOfLines={2} style={{fontSize:13, color:'#888', marginTop:20, textDecorationLine: 'line-through',}}> {this.state.data.price} </Text>
                                <Text numberOfLines={2} style={{fontSize:14, color:'#F00'}}> {data.price} </Text>
                                <Text numberOfLines={2} style={{fontSize:10, color:'green'}}> Cicilan mulai 100rb/bln </Text>
                                <View style={{flexDirection:'row',}}>
                                    {this.toRate(data.rating).map((star) =>
                                        (star==1)? <Image style={{width: 10,height:10}} source={require('../../Assets/Images/Icons/ic_starfilled.png')}/>:
                                            <Image style={{width: 10,height:10}} source={require('../../Assets/Images/Icons/ic_starempty.png')}/>
                                    )}
                                    <Text style={{marginLeft:5,fontSize:9,color:'#333'}}>{data.rating}</Text>
                                </View>
                            </View>
                            
                            <View style={{ borderTopWidth:1, borderTopColor:'#888',padding:5,height:this.state.width*0.2,width:'100%'}}>
                                <Text style={{color:'#888', fontSize:12}}>{data.seller}</Text>
                                <Text style={{color:'#888', fontSize:10, marginBottom:4}}>{data.rating} rating</Text>
                                <TouchableOpacity onPress={()=> alert('Beli')}  style={{padding:5,backgroundColor: '#D71149', alignSelf:'center', alignItems:'center', width:'100%'}}>
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


const mapsStageToProps = (state) => {
    return {
        account: state.account
    }
};

export default withNavigation(connect(mapsStageToProps)(WishlistProduct));