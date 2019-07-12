import React, {Component} from 'react';
import { 
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    StatusBar,
} from 'react-native';

import {IndicatorViewPager, PagerDotIndicator} from "rn-viewpager";
import RegisterModal from "./RegisterModal";

class AccountNotLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible:true,
        };
      }

    _renderIndicator() {
        return <PagerDotIndicator pageCount={4}/>
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fff',
            }}>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: 18,
                }}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')} style={{ justifyContent: 'center', width: 70 }}>
                        <Image
                            style={{
                                height: 24,
                                width: 24
                            }}
                            source={require('../Assets/Images/Icons/ic_close_black_24dp.png')}
                        />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{
                            color: '#000',
                            fontSize: 17,
                        }}>Keuntungan Mendaftar</Text>
                    </View>
                    <TouchableOpacity style={{ justifyContent: 'center', width: 70 }}>
                        <Text style={{
                            color: '#D71149'
                        }}>Menu Lain</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1,
                    alignContent:'center',
                    justifyContent:'center',}}>
                    <IndicatorViewPager
                        style={{
                            height: 300,
                        }}
                        indicator={this._renderIndicator()}>
                        <View style={{
                            alignItems:'center',
                            padding:20,
                        }}>
                            <Image style={{
                                height:100,
                                width:100,
                            }}source={require('../Assets/Images/Icons/ic_a.jpg') }/>
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
                            }}source={require('../Assets/Images/Icons/ic_b.jpg') }/>
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
                            }}source={require('../Assets/Images/Icons/ic_c.jpg') }/>
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
                            }}source={require('../Assets/Images/Icons/ic_d.jpg') }/>
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
                    height: 80,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('LoginModal')}
                        style={{
                        backgroundColor: '#f5f5f5',
                        borderColor: '#ddd',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderRadius: 2,
                        marginRight: 5,
                        height: 45,
                        width: '42%',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 17
                            }}
                        >Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('RegisterModal')}
                        style={{
                        backgroundColor: '#D71149',
                        borderRadius: 2,
                        marginLeft: 5,
                        width: '42%',
                        height: 45,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 17
                        }}>Daftar Akun</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default AccountNotLogin;