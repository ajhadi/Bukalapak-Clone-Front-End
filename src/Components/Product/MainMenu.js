import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const width = Dimensions.get('window').width

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {

            };
    }

    // carousel ads
    ads = [
        <Image style={styles.image} source={require('../../Assets/Images/Banner/1.jpg')} />,
        <Image style={styles.image} source={require('../../Assets/Images/Banner/2.jpg')} />,
        <Image style={styles.image} source={require('../../Assets/Images/Banner/3.jpg')} />,
        <Image style={styles.image} source={require('../../Assets/Images/Banner/4.jpg')} />,
        <Image style={styles.image} source={require('../../Assets/Images/Banner/5.jpg')} />,
        <Image style={styles.image} source={require('../../Assets/Images/Banner/6.jpg')} />,
        <Image style={styles.image} source={require('../../Assets/Images/Banner/7.jpg')} />,
        <Image style={styles.image} source={require('../../Assets/Images/Banner/8.jpg')} />,
        <Image style={styles.image} source={require('../../Assets/Images/Banner/9.jpg')} />,
    ]
    // category img
    images = [
        {uri: 'https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg'},
        {uri: 'https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg'},
        {uri: 'https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg'},
        {uri: 'https://cdn.pixabay.com/photo/2017/05/16/21/24/gorilla-2318998__340.jpg'},
    ]
    render(){
        const { images } = this;
        return(
            <View>
                <View style={[styles.container,{flexDirection:'row',paddingHorizontal:15}]}>
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

                {/* Loop Carousel */}
                <View style={[styles.container,{height:210}]}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Text style={{margin:15,fontSize:16,fontWeight:'bold'}}>Spesial Untukmu</Text> 
                        <TouchableOpacity>
                            <Text style={{fontSize:13,left:110,margin:15,color:'red'}}>Lihat semua</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:3}}>
                        <View>
                            <Carousel
                                ref={ ref => this.carouselRef = ref }
                                data={ this.ads }
                                renderItem={ ({ item }) => item }
                                onSnapToItem={ i => this.setState({ activeTab : i }) }
                                sliderWidth={ width }
                                itemWidth={ 330 }
                                slideStyle={{paddingHorizontal:5}}
                                inactiveSlideOpacity={ 1 }
                                inactiveSlideScale={ 1 }
                                loop={true}
                                autoplay={true}
                                autoplayInterval={3000}
                            />
                        </View>
                    </View>   
                </View>

                {/* Menu Icon */}
                <View style={styles.container}>
                    <View style={{flex:1,paddingHorizontal:15,paddingVertical:10}}>
                        <Text style={{fontSize:16,fontWeight:'bold',margin:5}}>E-Voucher, tiket, & investasi</Text> 
                    </View> 
                    <View style={{flex:1,flexDirection:'row',paddingHorizontal:15}}>
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
                    <View style={{flex:1,flexDirection:'row',paddingHorizontal:15}}>
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
                </View>

                {/* Category Menu */}
                <View style={[styles.container,{marginBottom:10,height:270}]}>
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
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:15,
        backgroundColor:'#FFF',
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
    image: {
        height: 140,
        width: 322,
        borderRadius: 8,
        alignSelf: 'center',
    },
});