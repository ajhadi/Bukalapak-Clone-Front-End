import React, { Component } from 'react';
import {View, Image, StyleSheet,Dimensions, Text, TextInput, TouchableOpacity} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class TransactionTabs extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeSlide: 0
        }
    }
    ads = [
        <View style={{flexDirection:'row',backgroundColor:'#fefefe',width}}>
            <View style={{flex:2,width,height:45,flexDirection:'row',alignItems:'center',borderRightWidth:2,borderColor:'#e6e6e6'}}>
                <Image style={{width:20,height:20,marginLeft:10}} source={require('../../Assets/Images/Icons/ico_search.png')} />
                <TextInput style={{width:'90%'}} placeholder={'Cari Tagihan...'}/>
            </View>
            <View style={{flex:1,marginTop:10}}>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Image style={{width:20,height:20,marginRight:10}} source={require('../../Assets/Images/Icons/ico_scan_barcode.png')} />
                    <Text>SEMUA</Text>
                </TouchableOpacity>
            </View>
        </View>,
        <View style={{backgroundColor:'cyan',height:'100%'}}><Text>2</Text></View>,
        <View style={{backgroundColor:'green',height:'100%'}}><Text>3</Text></View>
    ]
    get pagination () {
        const {activeSlide} = this.state
        return (
            <Pagination
              dotsLength={this.ads.length}
              activeDotIndex={activeSlide}
              dotColor={'red'}
              dotStyle={{
                  width: width/3,
                  height: 2,
              }}
              inactiveDotColor={'#e6e6e6'}
              inactiveDotStyle={{
                  width: width/3,
                  height: 2,
              }}
              containerStyle={{
                  backgroundColor:'transparent',
                  bottom:29,
              }}
              inactiveDotScale={0.9}
            />
        );
    }

    render () {
        return (
            <View style={{flex:1,backgroundColor:'#e6e6e6'}}>
                <View style={{flex:1,padding:15,width,backgroundColor:'#fefefe'}}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Transaksi</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',paddingBottom:5,backgroundColor:'#fefefe'}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity onPress={() => { this._carousel.snapToItem(0)}}>
                            <Text style={{fontWeight:'bold'}}>Tagihan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity onPress={() => { this._carousel.snapToItem(1)}}>
                            <Text style={{fontWeight:'bold'}}>Pembelian</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity onPress={() => { this._carousel.snapToItem(2)}}>
                            <Text style={{fontWeight:'bold'}}>Penjualan</Text>
                        </TouchableOpacity>
                    </View>
                </View> 
                {this.pagination}
                <View style={{flex:12,bottom:58}}>
                    <Carousel
                        ref={(c) => { this._carousel = c}}
                        data={ this.ads }
                        renderItem={ ({ item }) => item }
                        sliderWidth={ width }
                        itemWidth={ width }
                        onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                        itemHeight={ height }
                    />  
                </View>
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:15,
        backgroundColor:'#FFF',
        height:210
    },
    image: {
        height: 145,
        borderRadius: 10
    },
});