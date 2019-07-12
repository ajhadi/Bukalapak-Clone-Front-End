import React, {Component} from "react";
import {Alert, StatusBar, View} from "react-native";
import {connect} from "react-redux";
import SimpleHeader from "../Components/Navigation/SimpleHeaderLeft";


class SmsOTP extends Component {
    constructor(props) {
        super(props)
    }

    // if (this.props.account.error){
    // Alert.alert('Alert', 'Registrasi gagal')
    // }
    // //this.props.dispatch(postRegister(data));
    render() {
        return (
            <View>
                <SimpleHeader navigation={this.props.navigation}/>
            </View>
        )
    }
}

const mapsStageToProps = (state) => {
    return {
        account: state.account
    }
};

export default connect(mapsStageToProps)(SmsOTP);
