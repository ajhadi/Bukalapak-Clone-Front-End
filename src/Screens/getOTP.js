import React, {Component} from "react";
import {Alert, Dimensions, Image, StatusBar, Text, TextInput, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import SimpleHeader from "../Components/Navigation/SimpleHeaderLeft";
import {withNavigation} from "react-navigation";

class getOTP extends Component {

    render() {
        const {navigation} = this.props;
        let data = navigation.state.params;
        const width = Dimensions.get('window').width * 0.8;

        return (
            <View style={{flex: 1}}>
                <SimpleHeader navigation={this.props.navigation} title={"Verifkasi Akun"}/>
                <View style={{margin: 20, alignItems: 'center'}}>
                    <Image
                        source={require('../Assets/Images/Icons/img_medium_satelit.png')}
                        style={{height: 150, width: 150,}}
                    />

                    <Text style={{color: '#383838', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Pilih cara
                        verfikasi akun kamu</Text>

                    <Text style={{textAlign: 'center', marginTop: 20}}>Kode verifikasi akan di kirim ke . kode ini
                        adalah kode rahasia yang di gunakan untuk keamanan akun kamu</Text>


                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SmsOTP', data)}
                        style={{
                        backgroundColor: '#EE4B60',
                        marginTop: 25,
                        padding: 12,
                        borderRadius: 10,
                        width: width
                    }}>
                        <Text style={{color: '#fff', textAlign: 'center'}}>Terima Kode via SMS</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <Text>Bukan Nomor kamu?</Text>
                        <Text style={{color: '#EE4B60'}}> Ubah</Text>
                    </View>
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

export default withNavigation(connect(mapsStageToProps)(getOTP));
