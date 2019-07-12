import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image
}
from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
const width = Dimensions.get('window').width
const widthImg = width * 0.94

export default class LoopCarousel extends Component {
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
    render(){
        return(
            <View style={styles.container}>
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
                            itemWidth={ widthImg }
                            slideStyle={{paddingHorizontal:4}}
                            inactiveSlideOpacity={ 1 }
                            inactiveSlideScale={ 1 }
                            loop={true}
                            autoplay={true}
                            autoplayInterval={3000}
                        />
                    </View>
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
        height:210
    },
    image: {
        height: 140,
        width: width * 0.92,
        borderRadius: 8,
        alignSelf: 'center',
    },
});