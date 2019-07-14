import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import {CheckBox} from 'react-native-elements'

import SimpleHeader from '../Components/Navigation/SimpleHeader';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Notification',
            qty: 1,
            price: 3109000
        };
    }

    _IncreaseQty = () => {
        let temp = this.state.qty + 1
        this.setState({qty: temp})
    }

    _DecreaseQty = () => {
        let temp = this.state.qty > 1 ? this.state.qty - 1 : this.state.qty
        this.setState({qty: temp})
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#F3F3F3'}}>
                <SimpleHeader navigation={this.props.navigation} title={this.state.title}/>
                {/********************************************************************************************/}
                <ScrollView>
                    <View style={{backgroundColor:'#FFF', padding: 10}}>
                        <View style={{flexDirection: 'row',}}>
                            <View style={{flex:1, marginRight:10}}>
                                <Text numberOfLines={1} style={{fontSize:14}}>Hehe</Text>
                                <Text numberOfLines={2} >test 123test 123test 123test 123test 123test 123test 123test 123test 123test 123test 123test 123test 123test 123test 123test 123test 123</Text>
                            </View>
                            <View>
                                <Image style={{justifyContent: 'flex-start', width: 50, borderRadius:3,height: 50}}
                                    source={require('../Assets/DummyData/Image/air-jordan-7-retro-sp-shoe.jpg')}/>
                            </View>
                        </View>
                        <Text>date</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Cart;