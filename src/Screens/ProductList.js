import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList, StatusBar, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { getProducts } from '../Services/Axios/products';

class ProductList extends Component {
    getProductApi() {
        this.props.dispatch(getProducts());
    }
    
    componentDidMount() {
        this.getProductApi();
    }

    getData() {
        let product = this.props.products.data || [];
        return product;
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.getData()}
                    numColumns={2}
                    renderItem={({item}) => 
                        <TouchableOpacity style={styles.card}>
                            <View>
                                <Image style={styles.img} source={{uri: item.image[0]}} />
                            </View>
                            <View style={styles.desc}>
                                <View style={styles.titleBar}>
                                    <Text  style={styles.title} numberOfLines={2}>{item.name}</Text>
                                </View>
                                <Text style={styles.price} numberOfLines={1}>Rp{item.price}rb</Text>
                                <Text style={styles.rating} numberOfLines={1}>{item.rating} {'201'} Terjual</Text>
                                <Text style={styles.location} numberOfLines={1}>{'Jakarta Barat'}</Text>
                                <Text style={styles.feedback} numberOfLines={1}>{'100% (158 Feedback)'}</Text>
                                <Button color='#EE4B60' title='Beli' />
                            </View>
                        </TouchableOpacity>
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

const mapsStageToProps = (state) => {
    return {
        products: state.products
    }
};

export default connect(mapsStageToProps)(ProductList);