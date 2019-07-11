import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TransactionTabs from '../Components/Product/TransactionTabs';

class Transaction extends Component {
    render() {
        return (
            <View>
            <TransactionTabs/>
            </View>
        );
    }
}

export default Transaction;