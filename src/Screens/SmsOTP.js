import React, {Component} from "react";
import {Alert, Dimensions, StatusBar, Text, TextInput, View} from "react-native";
import {connect} from "react-redux";
import {sendApi} from "../Services/Axios/axios"
import SimpleHeader from "../Components/Navigation/SimpleHeaderLeft";
import {getVerifikasiToken, postRegister} from "../Services/Axios/account";
import {SERVER_API} from "../Helper/config";


class SmsOTP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            otp: 0
        }

    }

    cekOtp = async (otp, data) => {
        if (otp.length >= 5) {
            let token = {
                phoneNumber: data.email,
                token: otp
            }
            await sendApi(SERVER_API + "cekotp", "POST", token)
                .then(response => {
                    Alert.alert("Registrasi berhasi");
                    this.props.dispatch(postRegister(data));
                    this.props.navigation.navigate("Home");
                }).catch(error => {
                    Alert.alert("Verifikasi gagal")
                });
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
                        onSubmitEditing={(otp) => this.cekOtp(otp, data)}
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
