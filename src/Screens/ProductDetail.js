import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity} from 'react-native';
class DiscoverScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            rate:[1,1,1,0,0]
        };
        Dimensions.addEventListener('change', (e) => {
            this.setState(e.window);
        });
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={()=> console.log(this.props.data)}>
                <Text>Product Detail</Text></TouchableOpacity>
            </View>
        );
    }
}

export default DiscoverScreen;