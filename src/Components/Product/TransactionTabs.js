import React, { Component } from 'react';
import {View, Image, StyleSheet,Dimensions, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native'
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
    tab = [
        <ScrollView>
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
            </View>
            <TouchableOpacity>
                <View style={{backgroundColor:'#fefefe',marginTop:15,marginHorizontal:8,height:78,borderWidth:1,borderColor:'#ddd',flexDirection:'row',padding:5}}>
                    <View style={{flex:1,padding:2}}>
                        <Image source={require('../../Assets/Images/Category/phone.jpg')} style={{width:59,height:61}}/>   
                    </View>
                    <View style={{flex:3,padding:2}}>
                        <Text style={{fontSize:13,paddingLeft:5,marginTop:2}}>SSD NVMe Hyper V-GeN 128GB</Text>
                    </View>
                    <View style={{flex:2,padding:2,alignItems:'flex-end',marginRight:5}}>
                        <Text style={{fontWeight:'bold',marginBottom:5,marginTop:2}}>Rp390.975</Text>
                        <Text style={{fontSize:12}}>KEDALUWARSA</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{backgroundColor:'#fefefe',marginTop:15,marginHorizontal:8,height:78,borderWidth:1,borderColor:'#ddd',flexDirection:'row',padding:5}}>
                    <View style={{flex:1,padding:2}}>
                        <Image source={require('../../Assets/Images/Category/phone.jpg')} style={{width:59,height:61}}/>   
                    </View>
                    <View style={{flex:3,padding:2}}>
                        <Text style={{fontSize:13,paddingLeft:5,marginTop:2}}>SSD NVMe Hyper V-GeN 128GB</Text>
                    </View>
                    <View style={{flex:2,padding:2,alignItems:'flex-end',marginRight:5}}>
                        <Text style={{fontWeight:'bold',marginBottom:5,marginTop:2}}>Rp390.975</Text>
                        <Text style={{fontSize:12}}>KEDALUWARSA</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:15}}>
                <Image source={require('../../Assets/Images/bl_icon_gray_260_41_10.png')}/> 
            </View>
        </ScrollView>,
        <ScrollView>
            <View style={{flexDirection:'row',backgroundColor:'#fefefe',width}}>
                <View style={{flex:2,width,height:45,flexDirection:'row',alignItems:'center',borderRightWidth:2,borderColor:'#e6e6e6'}}>
                    <Image style={{width:20,height:20,marginLeft:10}} source={require('../../Assets/Images/Icons/ico_search.png')} />
                    <TextInput style={{width:'90%'}} placeholder={'Cari Transaksi, Nama atau Nomer...'}/>
                </View>
                <View style={{flex:1,marginTop:10}}>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Image style={{width:20,height:20,marginRight:10}} source={require('../../Assets/Images/Icons/ico_scan_barcode.png')} />
                        <Text>SEMUA</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity>
                <View style={{backgroundColor:'#fefefe',marginTop:15,marginHorizontal:8,height:87,borderWidth:1,borderColor:'#ddd',flexDirection:'row',padding:5}}>
                    <View style={{flex:1,padding:2}}>
                        <Image source={require('../../Assets/Images/Category/phone.jpg')} style={{width:61,height:65}}/>   
                    </View>
                    <View style={{flex:4,padding:2}}>
                        <Text style={{fontSize:15}}>SSD NVMe Hyper V-GeN 128GB</Text>
                        <Text style={{fontWeight:'bold',marginBottom:2,marginTop:2,color:'#D71149'}}>Rp390.975</Text>
                        <View style={{flexDirection:'row'}}>
                            <Image style={{width:20,height:20,marginRight:10}} source={require('../../Assets/Images/Icons/ico_scan_barcode.png')} />
                            <Text style={{fontSize:11}}>Dikembalikan</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:15}}>
                <Image source={require('../../Assets/Images/bl_icon_gray_260_41_10.png')}/> 
            </View>
        </ScrollView>,
        <ScrollView>
        <View style={{flexDirection:'row',backgroundColor:'#fefefe',width}}>
            <View style={{flex:4,width,height:45,flexDirection:'row',alignItems:'center',borderRightWidth:2,borderColor:'#e6e6e6'}}>
                <Image style={{width:20,height:20,marginLeft:10}} source={require('../../Assets/Images/Icons/ico_search.png')} />
                <TextInput style={{width:'90%'}} placeholder={'Cari Transaksi, Nama atau Nomer...'}/>
            </View>
            <View style={{flex:1,marginTop:10}}>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingLeft:7}}>
                    <Image style={{width:20,height:20,marginRight:10}} source={require('../../Assets/Images/Icons/ico_scan_barcode.png')} />
                    <Image style={{width:20,height:20,marginRight:10}} source={require('../../Assets/Images/Icons/ico_scan_barcode.png')} />
                </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity>
            <View style={{backgroundColor:'#fefefe',marginTop:15,marginHorizontal:8,height:78,borderWidth:1,borderColor:'#ddd',flexDirection:'row',padding:5}}>
                <View style={{flex:1,padding:2}}>
                    <Image source={require('../../Assets/Images/Category/phone.jpg')} style={{width:59,height:61}}/>   
                </View>
                <View style={{flex:3,padding:2}}>
                    <Text style={{fontSize:13,paddingLeft:5,marginTop:2}}>SSD NVMe Hyper V-GeN 128GB</Text>
                </View>
                <View style={{flex:2,padding:2,alignItems:'flex-end',marginRight:5}}>
                    <Text style={{fontWeight:'bold',marginBottom:5,marginTop:2}}>Rp390.975</Text>
                    <Text style={{fontSize:12}}>KEDALUWARSA</Text>
                </View>
            </View>
        </TouchableOpacity>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:15}}>
                <Image source={require('../../Assets/Images/bl_icon_gray_260_41_10.png')}/> 
        </View>
    </ScrollView>
    ]
    get pagination () {
        const {activeSlide} = this.state
        return (
            <Pagination
              dotsLength={this.tab.length}
              activeDotIndex={activeSlide}
              dotColor={'#D71149'}
              dotStyle={{
                  width: width*0.35,
                  height: 2,
              }}
              inactiveDotColor={'#e6e6e6'}
              inactiveDotStyle={{
                  width: width*0.35,
                  height: 2,
              }}
              containerStyle={{
                  backgroundColor:'transparent',
                  marginTop:70,
              }}
              inactiveDotScale={0.9}
            />
        );
    }

    render () {
        return (
            <View style={{flex:1,backgroundColor:'#e6e6e6'}}>
                <View style={{flex:1,padding:8,width,backgroundColor:'#fefefe',position:'absolute'}}>
                    <Text style={{fontSize:16,fontWeight:'bold',margin:5}}>Transaksi</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',backgroundColor:'#fefefe',marginTop:51,padding:13,position:'absolute',zIndex:3}}>
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
                <View style={{flex:1}}>
                    {this.pagination}
                </View>
                <View style={{flex:1,marginTop:103,position:'absolute',zIndex:1,height}}>
                    <Carousel
                        ref={(c) => { this._carousel = c}}
                        data={ this.tab }
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