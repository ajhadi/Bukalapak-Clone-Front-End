import React, { Component } from 'react';
import { 
    Text, 
    View, 
    StyleSheet,  
    TouchableOpacity, 
    TextInput, } 
from 'react-native';

class LoginModal extends Component {
    render() {
        return (
            <View style={styles.container}>
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
});

export default LoginModal;