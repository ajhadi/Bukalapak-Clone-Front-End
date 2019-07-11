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
const widthImg = width * 0.9

export default class LoopCarousel extends Component {
    ads = [
        <Image style={styles.image} source={{uri: 'https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg'}} />,
        <Image style={styles.image} source={{uri: 'https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg'}} />,
        <Image style={styles.image} source={{uri: 'https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg'}} />
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
                    <TouchableOpacity>
                        <Carousel
                            ref={ ref => this.carouselRef = ref }
                            data={ this.ads }
                            renderItem={ ({ item }) => item }
                            onSnapToItem={ i => this.setState({ activeTab : i }) }
                            sliderWidth={ width }
                            itemWidth={ widthImg }
                            slideStyle={{paddingHorizontal:5}}
                            inactiveSlideOpacity={ 1 }
                            inactiveSlideScale={ 1 }
                            loop={true}
                            autoplay={true}
                            autoplayInterval={3000}
                        />
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
        height:210
    },
    image: {
        height: 145,
        borderRadius: 10
    },
});