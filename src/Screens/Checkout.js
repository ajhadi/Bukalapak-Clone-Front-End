import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import {CheckBox} from 'react-native-elements'

import SimpleHeader from '../Components/Navigation/SimpleHeader';

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Atur Pesanan',
        };
    }

    _IncreaseQty = () => {
        let temp = this.state.qty + 1
        this.setState({qty: temp})
    }

    _DecreaseQty = () => {
        let temp = this.state.qty > 1 ? this.state.qty - 1 : this.state.qty
        this.setState({qty: temp})
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#F3F3F3'}}>
                <SimpleHeader navigation={this.props.navigation} title={this.state.title}/>
                {/********************************************************************************************/}
                <ScrollView>
                    <View style={{marginTop:20, backgroundColor:'#FFF'}}>
                        <Text style={{ marginLeft:20, marginTop:15,color:'#000', fontSize:15, fontWeight:'500'}}>Alamat Pengiriman</Text>
                        <TouchableOpacity style={{marginTop:10, marginLeft:20,flexDirection:'row',marginBottom:15,}}>
                            <Text style={{color:'#000',flex:1}} numberOfLines={2}> Blok B1 20, Puri Indah Lestari</Text>
                            <Image style={{width: 15, height: 15}} source={require('../Assets/Images/Icons/ico_chevron_right_minor.png')}/>
                        </TouchableOpacity>
                        <View style={{borderTopWidth:1, borderColor:'#F1F1F1', flexDirection:'row', alignItems:'center'}}>
                            <CheckBox
                                checkedIcon={<Image style={{width: 25, height: 25}}
                                                    source={require('../Assets/Images/Icons/ic_checkbox_active.png')}/>}
                                uncheckedIcon={<Image style={{width: 25, height: 25}}
                                                      source={require('../Assets/Images/Icons/ic_checkbox_normal.png')}/>}
                                checked={this.state.checked}
                                onPress={() => this.setState({checked: !this.state.checked})}
                            />
                            <Text>Kirim Sebagai Dropshipper</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={{backgroundColor:'#FFF', flexDirection:'row', padding:20, alignItems:'center', marginTop:20}}>
                        <View style={{flex:1}}>
                            <Text style={{fontWeight:'500', color:'#000'}}>Metode Pembayaran</Text>
                            <Text>Pilih Metode Pembayaran</Text>
                        </View>
                        <Image style={{width: 20, height: 20}} source={require('../Assets/Images/Icons/ico_chevron_right_minor.png')}/>
                    </TouchableOpacity>

                    <View style={{backgroundColor:'#FFF', marginTop:20}}>
                        <Text style={{marginTop:20, marginLeft:20,color:'#000', fontWeight:'500', fontSize:14}}>Daftar Belanja</Text>

                        <View style={{padding:20, borderBottomWidth:1, borderBottomColor:'#F1F1F1'}}>
                            <View style={{flexDirection:'row'}}>
                                <Image style={{width: 30, height: 30}} source={require('../Assets/Images/Icons/ico_shop.png')}/>
                                <Text style={{alignSelf:'flex-end', marginBottom:3, marginLeft:10}}>Nike Indonesia</Text>
                            </View>
                            <View>
                                <Image style={{ marginTop:10, justifyContent: 'flex-start', width: 50, borderRadius:4,height: 50}} source={require('../Assets/DummyData/Image/air-jordan-7-retro-sp-shoe.jpg')}/>
                                <View>
                                    <Text>Air Jordan 7 Retro SP Shoe</Text>
                                    <View style={{ alignItems:'center',flexDirection:'row'}}>
                                        <Text style={{flex:1}}>Rp 1.109.000</Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            minWidth: 120,
                                            height:30,
                                            borderRadius: 4,
                                            borderWidth: 1,
                                            borderColor: '#EEE',
                                            marginBottom: 10,
                                            marginTop: 10
                                        }}>
                                            <TouchableOpacity onPress={() => this._DecreaseQty()} style={{
                                                flex: 1,
                                                backgroundColor: '#EEE',
                                                padding: 10,
                                                alignItems:'center',
                                                justifyContent:'center'
                                            }}><Text>-</Text></TouchableOpacity>
                                            <View style={{
                                                flex: 2,
                                                backgroundColor: '#FFF',
                                                padding: 10,
                                                borderLeftWidth: 1,
                                                borderRightWidth: 1,
                                                borderColor: '#EEE',
                                                alignItems:'center',
                                                justifyContent:'center'
                                            }}><Text>{this.state.qty}</Text></View>
                                            <TouchableOpacity onPress={() => this._IncreaseQty()} style={{
                                                flex: 1,
                                                backgroundColor: '#EEE',
                                                padding: 10,
                                                alignItems:'center',
                                                justifyContent:'center'
                                            }}><Text>+</Text></TouchableOpacity>
                                        </View>
                                    </View>
                                    <Text style={{fontSize:9}}>Tambah catatan untuk Pelapak</Text>
                                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>
                                        <View style={{flex:1, marginTop:10}}>
                                            <Text>Kurir</Text>
                                            <Text>Pos Indonesia Kilat</Text>
                                        </View>
                                        <Image style={{width:60 ,height: 45}} source={require('../Assets/Images/Icons/pos_indonesia.png')}/>
                                        <Image style={{width: 20, height: 20}} source={require('../Assets/Images/Icons/ico_chevron_right_minor.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <Text style={{marginTop:20,color:'#000', fontWeight:'500', fontSize:14}}>Perlindungan Pengiriman</Text>
                                <View style={{flexDirection:'row', alignItems:'center', }}>
                                    <CheckBox
                                        checkedIcon={<Image style={{width: 25, height: 25}}
                                                            source={require('../Assets/Images/Icons/ic_checkbox_active.png')}/>}
                                        uncheckedIcon={<Image style={{width: 25, height: 25}}
                                                            source={require('../Assets/Images/Icons/ic_checkbox_normal.png')}/>}
                                        checked={this.state.insurance}
                                        onPress={() => this.setState({insurance: !this.state.insurance})}
                                    />
                                    <Text style={{flex:1, fontSize:10}}>Jaminan risiko bila barang rusak atau hilang dalam pengiriman.</Text>
                                    <Text style={{margin:5}}>Rp 1.319</Text>
                                </View>
                            </View>
                        </View>
                        {this.state.insurance == true ?
                        <View style={{padding:20, borderBottomWidth:1, borderBottomColor:'#F1F1F1'}}>
                            <Text style={{fontSize:12}}>Dengan menggunakan perlindungan pengiriman, kamu sudah menyetujui ketentuan yang berlaku.</Text>
                        </View>
                        :null}
                    </View>

                    <View style={{padding:20, marginTop:20, marginBottom:20, backgroundColor:'#FFF'}}>
                        <Text style={{fontSize:15, marginBottom:15, color:'#000', fontWeight:'500'}}>Rincian Barang</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{flex:1}}>Total harga barang</Text>
                            <Text>Rp1.109.000</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{flex:1}}>Ongkos kirim</Text>
                            <Text>Rp25.000</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{flex:1}}>Biaya ansuransi</Text>
                            <Text>Rp1.319</Text>
                        </View>
                    </View>
                </ScrollView>
                {/********************************************************************************************/}
                <View style={{backgroundColor: '#FFF', alignItems: 'center', padding: 15, height:100, borderTopWidth:1, borderColor:'#F5F5F5'}}>
                    <View style={{alignItems:'center', flexDirection:'row', marginBottom:10}}>
                        <Text style={{flex: 1, fontSize: 12, fontWeight: '400'}}>Total Pembayaran</Text>
                        <Text style={{fontWeight: '400', color: '#000'}}>Rp 2000000</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Checkout')}
                        style={{
                        backgroundColor: '#D71149',
                        alignItems: 'center',
                        padding: 20,
                        justifyContent: 'center',
                        height: 35,
                        borderRadius: 3,
                        width:'100%'
                    }}><Text style={{fontSize: 14, fontWeight: '400', color: '#FFF'}}> Bayar </Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Checkout;