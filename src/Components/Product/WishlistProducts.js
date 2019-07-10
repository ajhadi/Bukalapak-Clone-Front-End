import React, { Component } from 'react';
import { Text, View,StyleSheet,Image, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class WishlistProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:this.props.data,
            filter:'Semua',
            width: Dimensions.get('window').width,
        };
        Dimensions.addEventListener('change', (e) => {
            this.setState(e.window);
        });
    }
    render() {
        return (
            <View style={{width:this.state.width/2}}>
                <View style={styles.wishlistCard}>
                    <Image style={{width: (this.state.width/2)-2,height: (this.state.width/2)-2}} 
                        source={require('../../Assets/DummyData/Image/air-jordan-7-retro-sp-shoe.jpg')}
                    />
                    <View style={styles.description}>
                        <Text numberOfLines={2} style={{fontSize:14, color:'#000'}}> {this.state.data.name} </Text>
                        <Text numberOfLines={2} style={{fontSize:13, color:'#888', marginTop:10, textDecorationLine: 'line-through',}}> {this.state.data.price} </Text>
                        <Text numberOfLines={2} style={{fontSize:14, color:'#F00'}}> {this.state.data.price} </Text>
                        <Text numberOfLines={2} style={{fontSize:10, color:'green'}}> Cicilan mulai 100rb/bln </Text>
                        <View style={{width:'100%'}}>
                            <TouchableOpacity style={{padding:5,backgroundColor: 'red', alignSelf:'center', alignItems:'center', width:'90%'}}>
                                <Text style={{color:'#FFF'}}>Beli</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default WishlistProduct;


const styles = StyleSheet.create({
    wishlistCard:{
        width:'100%',
        height:400,
        borderWidth:1,
        borderColor:'#F1F1F1',
        borderTopColor:'#F9F9F9'
    },
    description:{
        padding:10
    }
});