import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView, ListView, Alert
}
    from 'react-native';
import {getCategories} from "../../Services/Axios/categories";
import {connect} from "react-redux";

class CategoryMenu extends Component {

    images2 = [
        [
            {
                image: require('../../Assets/Images/Category/auto.jpg'),
                titile: 'auto'
            },

            {
                image: require('../../Assets/Images/Category/baby-care.jpg'),
                titile: 'care'
            },
        ],
        [
            {
                image: require('../../Assets/Images/Category/beauty.jpg'),
                titile: 'auto'
            },

            {
                image: require('../../Assets/Images/Category/bicycle.jpg'),
                titile: 'care'
            },


        ],
        [
            {
                image: require('../../Assets/Images/Category/camera.jpg'),
                title: 'auto'
            },

            {
                image: require('../../Assets/Images/Category/computer.jpg'),
                title: 'care'
            },

        ],
        [
            {
                image: require('../../Assets/Images/Category/electronic.jpg'),
                title: 'auto'
            },

            {
                image: require('../../Assets/Images/Category/fashion-kid.jpg'),
                title: 'care'
            },
        ]
    ];

    getApiCategories() {
        this.props.dispatch(getCategories())
    }

    componentDidMount() {
        this.getApiCategories()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={{margin: 15, fontSize: 16, fontWeight: 'bold'}}>Kategori Barang</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize: 13, left: 110, margin: 15, color: '#D71149'}}>Lihat semua</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 4}}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10, numColumns: 2, flex: 1}}>
                            {this.images2.map((data, index) => (
                                <View key={index}>
                                    <TouchableOpacity
                                        onPress={() => Alert.alert('Alert', data[0].title)}
                                    >
                                        <Image style={{height: 90, width: 120, borderRadius: 10, margin: 5}}
                                               source={data[0].image}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image style={{height: 90, width: 120, borderRadius: 10, margin: 5}}
                                               source={data[1].image}/>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const mapsStageToProps = (state) => {
    return {
        categories: state.categories
    }
};
export default connect(mapsStageToProps)(CategoryMenu);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        backgroundColor: '#FFF',
        marginBottom: 75,
        height: 270
    },
    image: {
        height: 145,
        borderRadius: 10
    },
});
