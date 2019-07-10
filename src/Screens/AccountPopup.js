import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';


import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from "rn-viewpager";

class AkunScreen extends Component {
    _renderIndicator() {
        return <PagerDotIndicator pageCount={3}/>
    }

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: 20,
                }}>
                    <Image
                        style={{
                            height:25,
                            width:25
                        }}
                        source={require('../Assets/Icons/ic_action_clear_black.png')}
                    />
                    <Text style={{
                        color: '#000000',
                        fontSize: 17
                    }}>Keuntungan Mendaftar</Text>
                    <Text style={{
                        color: '#ff0026'
                    }}>Menu Lain</Text>
                </View>
                <View style={{flex: 1,
                    alignContent:'center',
                    justifyContent:'center',}}>
                    <IndicatorViewPager
                        style={{
                            height: 250,
                        }}
                        indicator={this._renderIndicator()}>
                        <View style={{
                            alignItems:'center',
                            padding:20
                        }}>
                            <Image style={{
                                height:100,
                                width:100,
                                backgroundColor:'#ff2742',
                            }}/>
                            <Text style={{
                                fontSize:17,
                                color:'#000000',
                                textAlign:'center',
                                paddingTop:20
                            }}>Transaksi Lebih cepat</Text>
                            <Text style={{textAlign:'center', paddingTop:5}}>Kamu cukup menyimpan alamat pengiriman sekali saja untuk mempercepat transaksi berikutnya </Text>

                        </View>
                        <View style={{
                            alignItems:'center',
                            padding:20
                        }}>
                            <Image style={{
                                height:100,
                                width:100,
                                backgroundColor:'#ff2742',
                            }}/>
                            <Text style={{
                                fontSize:17,
                                color:'#000000',
                                textAlign:'center',
                                paddingTop:20
                            }}>Belanja lebih murah</Text>
                            <Text style={{textAlign:'center', paddingTop:5}}>Rasaka murahnya berbelanja dengan mengunakan voucher belanja</Text>

                        </View>
                        <View style={{
                            alignItems:'center',
                            padding:20
                        }}>
                            <Image style={{
                                height:100,
                                width:100,
                                backgroundColor:'#ff2742',
                            }}/>
                            <Text style={{
                                fontSize:17,
                                color:'#000000',
                                textAlign:'center',
                                paddingTop:20
                            }}>Mencari barang favorit</Text>
                            <Text style={{textAlign:'center', paddingTop:5}}>Menemukan kembali barang yang kamu suka menggunakan fitur favorit</Text>

                        </View>

                        <View style={{
                            alignItems:'center',
                            padding:20
                        }}>
                            <Image style={{
                                height:100,
                                width:100,
                                backgroundColor:'#ff2742',
                            }}/>
                            <Text style={{
                                fontSize:17,
                                color:'#000000',
                                textAlign:'center',
                                paddingTop:20
                            }}>Belanja Lebih praktis</Text>
                            <Text style={{textAlign:'center', paddingTop:5}}>BukaDompet solusi terbaik  bagi kamu yang ingin berbelanja lebih praktis dan cepat</Text>


                        </View>
                    </IndicatorViewPager>
                </View>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{
                        backgroundColor: '#979797',
                        margin: 10,
                        width: '45%',
                        alignItems: 'center',
                        paddingTop: 15,
                        paddingBottom: 15,
                    }}>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 17
                            }}
                        >Login</Text>
                    </View>
                    <View style={{
                        backgroundColor: '#ff0026',
                        width: '45%',
                        margin: 10,
                        paddingTop: 15,
                        paddingBottom: 15,
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 17
                        }}>Daftar Akun</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default AkunScreen;