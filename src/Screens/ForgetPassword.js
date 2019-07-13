import React, { Component } from 'react';
import { 
    Text, 
    View, 
    StyleSheet,  
    TouchableOpacity, 
    TextInput,
    Image } 
from 'react-native';

class LoginModal extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack(null)}
                        style={{ width: 50 }}>
                        <Image style={styles.headIcon} source={require('../Assets/Images/Icons/ic_back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.headTitle}>
                        Lupa Password
                    </Text>
                    <View style={{ width: 50 }}></View>
                </View>
                <View style={styles.contain}>
                    <Text style={styles.label}>NO. HANDPHONE ATAU ALAMAT EMAIL</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.btnTextLogin}>Kirim</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
    },
    contain: {
        flex:1,
        marginTop:100
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
    },
    headIcon: {
        width: 25,
        height: 25
    },
    headTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000'
    },
});

export default LoginModal;