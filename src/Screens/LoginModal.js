import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    StatusBar,
    TouchableOpacity,
    TextInput,
    ScrollView, Alert
}
    from 'react-native';
import {connect} from 'react-redux';
import {postLogin, getAccount} from "../Services/Axios/account";
import RegisterModal from "./RegisterModal";

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    postLogin(username, password) {
        this.props.dispatch(postLogin(username, password));
        if (this.props.account.error) {
            Alert.alert("", 'Username atau password yang anda masukan salah. silahkan coba lagi', [
                    {text: 'COBA LAGI', style: 'destructive'},
                ],
                {cancelable: false},
            )
        } else {
            this.props.dispatch(getAccount(this.props.account.token));
            this.props.navigation.navigate('Home');
        }
    };

    navigateRegister() {
        this.props.navigation.navigate("SmsOTP")
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content"/>
                <View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack(null)}
                    >
                        <Image style={styles.headIcon} source={require('../Assets/Images/Icons/ic_back.png')}/>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.contain}>
                        <Text style={styles.title}>Login</Text>
                        <Text style={styles.label}>E-MAIL / USERNAME / NOMOR HANDPHONE</Text>
                        <TextInput
                            onChangeText={(username) => this.setState({username})}
                            style={styles.input}
                        />
                        <Text style={styles.label}>PASSWORD</Text>
                        <TextInput
                            onChangeText={(password) => this.setState({password})}
                            style={styles.input}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity
                            onPress={() => this.postLogin(this.state.username, this.state.password)}
                            style={styles.btnLogin}>
                            <Text style={styles.btnTextLogin}>Login</Text>
                        </TouchableOpacity>
                        <View style={styles.lineBar}>
                            <View style={styles.line}/>
                            <View style={{width: '40%'}}>
                                <Text style={styles.textFoot}>atau login dengan</Text>
                            </View>
                            <View style={styles.line}/>
                        </View>
                        <View style={styles.optLoginBar}>
                            <TouchableOpacity style={styles.optLoginBtn}>
                                <Image style={{height: 23, width: 23, marginRight: 10,}}
                                       source={require('../Assets/Images/Icons/ic_facebook.png')}/>
                                <Text style={{color: '#000', fontSize: 17}}>
                                    Facebook
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optLoginBtn}>
                                <Image style={{height: 23, width: 23, marginRight: 10,}}
                                       source={require('../Assets/Images/Icons/ic_googleplus.png')}/>
                                <Text style={{color: '#000', fontSize: 17}}>
                                    Google
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop: 12}}>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text style={styles.textFoot}>Belum punya akun?</Text>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate("RegisterModal")}>
                                    <Text style={[styles.textFoot, {color: '#D71149', fontWeight: '500'}]}> Daftar
                                        Sekarang</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("ForgetPassword")}>
                                <Text style={[styles.textFoot, {color: '#D71149', marginTop: 8}]}>Lupa Password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    headIcon: {
        width: 25,
        height: 25
    },
    contain: {
        height: 500,
        paddingTop: 50,
        paddingBottom: 50,
    },
    title: {
        fontSize: 24,
        color: '#151515',
        marginBottom: 35,
    },
    label: {
        fontSize: 12,
        fontWeight: '500',
        color: '#151515'
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 35,
    },
    btnLogin: {
        backgroundColor: '#D71149',
        borderRadius: 2,
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTextLogin: {
        color: '#fff',
        fontSize: 17
    },
    line: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        width: '30%'
    },
    lineBar: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    optLoginBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    optLoginBtn: {
        backgroundColor: '#f5f5f5',
        borderColor: '#ddd',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 2,
        height: 45,
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textFoot: {
        alignSelf: 'center',
        color: '#aaa',
        fontSize: 13
    }
});

const mapsStageToProps = (state) => {
    return {
        account: state.account
    }
};

export default connect(mapsStageToProps)(LoginModal);