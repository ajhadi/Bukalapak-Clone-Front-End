import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import SearchHeader from '../Components/Navigation/SearchHeader';
import ProductList from './ProductList';

class Transaction extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <View>
                <SearchHeader navigation={this.props.navigation}/>
                <ProductList/>
            </View>
        );
    }
}

export default Transaction;