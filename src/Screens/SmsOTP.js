import React, {Component} from "react";
import {Alert, Dimensions, StatusBar, Text, TextInput, View} from "react-native";
import {connect} from "react-redux";
import SimpleHeader from "../Components/Navigation/SimpleHeaderLeft";


class SmsOTP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            otp: 0
        }

    }

    cekOtp = (otp, data) => {
        if (otp.length >= 5) {

        }
    };

    render() {
        const {navigation} = this.props;
        let data = navigation.state.params;
        const width = Dimensions.get('window').width * 0.6;
        return (
            <View>
                <SimpleHeader navigation={this.props.navigation}/>
                <View style={{flex: 1, alignItems: 'center', padding: 30}}>
                    <Text style={{
                        fontSize: 25,
                        color: 'black',
                        paddingTop: 20
                    }}>Masukan kode otentikasi</Text>
                    <Text style={{
                        marginTop: 10
                    }}>Bukalapak telah mengirimkan kode ontentifikasi lewat SMS ke {data.email}</Text>
                    <TextInput
                        secureTextEntry={true}
                        textAlign={'center'}
                        keyboardType='numeric'
                        style={{
                            marginTop: 20,
                            backgroundColor: '#cbcbcb',
                            width: width,
                            height: 50,
                            marginBottom: 20,
                            fontSize: 20,
                        }}
                        onChangeText={(otp) => this.cekOtp(otp, data)}
                        maxLength={5}
                    />

                    <Text>Tidak menerima kode?s</Text>
                </View>
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
