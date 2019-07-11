import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList, StatusBar } from 'react-native';

// Dummy untuk testing
import Dummy from '../Assets/DummyData/Notes';

class ProductList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                <FlatList
                    data={Dummy}    // Dummy untuk testing
                    numColumns={2}
                    renderItem={({item}) => 
                        <View style={styles.card}>
                            <View>
                                <Image style={styles.img} source={require('../Assets/Images/Products/IMG_20180519_163440.jpg')} />
                            </View>
                            <View style={styles.desc}>
                                <View style={styles.titleBar}>
                                    <Text  style={styles.title} numberOfLines={2}>{'Kaos Polos'}</Text>
                                </View>
                                <Text style={styles.price} numberOfLines={1}>Rp{'100'}rb</Text>
                                <Text style={styles.rating} numberOfLines={1}>{'****'} {'201'} Terjual</Text>
                                <Text style={styles.location} numberOfLines={1}>{'Jakarta Barat'}</Text>
                                <Text style={styles.feedback} numberOfLines={1}>{'100% (158 Feedback)'}</Text>
                                <Button color='#EE4B60' title='Beli' />
                            </View>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f3f3f3',
        marginLeft: 5,
        marginRight: 5,
    },
    card: {
        width: 165,
        height: 330,
        backgroundColor: '#fff',
        borderRadius: 6,
        margin: 5,
    },
    desc: {
        padding: 14,
    },
    img: {
        width: 165,
        height: 165,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    titleBar: {
        height: 30,
    },
    title: {
        fontSize: 12,
        color: '#000',
    },
    price: {
        fontSize: 12,
        color: '#000',
    },
    rating: {
        fontSize: 12,
    },
    location: {
        fontSize: 12,
    },
    feedback: {
        fontSize: 12,
        marginBottom: 15,
        color: '#aaa'
    },
});

export default ProductList;