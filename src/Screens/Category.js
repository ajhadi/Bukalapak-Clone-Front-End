import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getCategories } from '../Services/Axios/categories';
import SimpleHeader from '../Components/Navigation/SimpleHeader';

class Category extends Component {

    constructor(props) {
        super(props);
        // this.limitSearch = _.debounce(this.searchData, 800);
        this.state = {
            title: this.props.title,
            search: '',
        };
    }

    getCategoriesApi() {
        this.props.dispatch(getCategories());
    }

    componentDidMount() {
        this.getCategoriesApi();
    }

    getData() {
        let category = this.props.categories.data || [];
        return category;
    }

    render() {
        return (
            <View>
                <SimpleHeader navigation={this.props.navigation} title='Pilih Kategori' />
                <View style={styles.searchBar}>
                    <View style={styles.searchInput}>
                        <TextInput
                            placeholder={'Cari kateogri barang...'}
                            // onChangeText={(search) => this.limitSearch(search)}
                            value={this.state.text} />
                    </View>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.getData()}
                    renderItem={({ item }) =>
                        <View backgroundColor='#fff'>
                            <View style={styles.parent}>
                                <Text style={[styles.text, {fontWeight: '500'}]}>{item.name}</Text>
                            </View>
                            {item.children.map((child) => 
                                <TouchableOpacity style={styles.child}>
                                    <Text style={styles.text}>{child.name}</Text> 
                                </TouchableOpacity>
                            )}
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        padding: 15,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: '#F1F1F1',
    },
    child: {
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 25,
        paddingRight: 25,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
    },
    text: {
        fontSize: 14,
        color: '#000',
    },
    searchBar: {
        backgroundColor: '#fff',
        paddingLeft: 25,
        paddingRight: 25,
        padding: 15,
        zIndex: 2,
    },
    searchInput: {
        backgroundColor: '#f1f1f1',
        borderRadius: 3,
        height: 40,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    }
});

const mapsStageToProps = (state) => {
    return {
        categories: state.categories
    }
};

export default connect(mapsStageToProps)(Category);