import React, { Component } from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    Image,
    StatusBar,
    ScrollView } 
from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

class Account extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                <ScrollView>
                    <LinearGradient colors={['#fff', '#929292']} style={styles.gradient}>
                    <View style={styles.headerBar}>
                        <View>
                            <Text style={styles.textHead}>Akun Kamu</Text>
                        </View>
                        <View style={styles.headerRight}>
                            <TouchableOpacity style={styles.iconHead}>
                                <Image source={require('../Assets/Images/Icons/ico_notification_minor.png')} style={styles.barIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconHead}>
                                <Image source={require('../Assets/Images/Icons/ico_comment_minor.png')} style={styles.barIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconHead}>
                                <Image source={require('../Assets/Images/Icons/ico_setting.png')} style={styles.barIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.profile}>
                        <View style={{marginTop: -30, alignItems:'center'}}>
                            <Image style={styles.imgProfile} source={require('../Assets/Images/Icons/avatar.png')} />
                            <Text numberOfLines={1} style={styles.nameProfile}>Fadlan Fajar Ramdani</Text>
                            <View style={{paddingLeft: 20,paddingRight: 20, flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                                <Text style={{}}>Saldo Bukalapak</Text>
                                <Text style={{}}>Lihat Detail</Text>
                            </View>
                            <View style={{paddingLeft: 20,paddingRight: 20, flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                                <View style={styles.walletBar}>
                                    <Image style={styles.walletIcon} source={require('../Assets/Images/dana-logo.png')}/>
                                    <Text style={{padding: 4}}>DANA</Text>
                                    <Text style={{fontWeight: '500'}}>Rp7,54rb</Text>
                                </View>
                                <View style={styles.walletBar}>
                                    <Image style={styles.walletIcon} source={require('../Assets/Images/dana-logo.png')}/>
                                    <Text style={{padding: 4}}>Saldo</Text>
                                    <Text style={{fontWeight: '500'}}>Rp0</Text>
                                </View>
                                <View style={styles.walletBar}>
                                    <Image style={styles.walletIcon} source={require('../Assets/Images/dana-logo.png')} />
                                    <Text style={{padding: 4}}>Credits</Text>
                                    <Text style={{fontWeight: '500'}}>Rp1,65rb</Text>
                                </View>
                            </View>
                            <View style={styles.tabBar}>
                                <TouchableOpacity style={styles.btnTab}>
                                    <View style={styles.lineTab}></View>
                                    <Text>Pembeli</Text>
                                    <View style={[styles.lineTab, {backgroundColor: '#FF3566'}]}></View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnTab}>
                                        <View style={styles.lineTab}></View>
                                    <Text>Pelapak</Text>
                                    <View style={[styles.lineTab, {backgroundColor: 'transparent'}]}></View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    </LinearGradient>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: 'transparent',
    },
    textHead: {
        fontSize: 20,
        fontWeight: '400',
        color: '#000',
    },
    headerRight: {
        flexDirection: 'row',
    },
    barIcon: {
        width: 25,
        height: 25,
        opacity: 0.6,
        alignSelf: 'center'
    },
    iconHead: {
        marginLeft: 10,
    },
    gradient: {
        height: 340,
    },
    profile: {
        marginTop: 34,
        height: 250,
        backgroundColor: '#fff',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    imgProfile: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    nameProfile: {
        padding: 15,
        fontSize: 18,
        color: '#000',
    },
    walletBar: {
        width: 80,
        alignItems: 'center',
        margin: 10,
    },
    walletIcon: {
        width: 25,
        height: 25,
    },
    tabBar: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingLeft: 20, 
        paddingRight: 20, 
        height: 50, 
        elevation: 1, 
        backgroundColor: '#fff' 
    },
    btnTab: {
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    lineTab: {
        height: 3,
        width: '100%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    }
});

export default Account;