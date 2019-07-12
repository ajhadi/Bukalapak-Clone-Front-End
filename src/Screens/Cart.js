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

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Keranjang Belanja',
            qty: 1,
            price: 3109000
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
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#FFF',
                    borderColor: '#E0E0E0',
                    borderWidth: 1
                }}>
                    <CheckBox
                        checkedIcon={<Image style={{width: 20, height: 20}}
                                            source={require('../Assets/Images/Icons/ic_checkbox_active.png')}/>}
                        uncheckedIcon={<Image style={{width: 20, height: 20}}
                                              source={require('../Assets/Images/Icons/ic_checkbox_normal.png')}/>}
                        checked={this.state.checked}
                        onPress={() => this.setState({checked: !this.state.checked})}
                    />
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={{fontWeight: '500', color: '#333'}}> Pilih Semua </Text>
                        <Text>(0/4)</Text>
                    </View>
                    <TouchableOpacity style={{margin: 10}}>
                        <Text style={{color: '#D71149'}}>Hapus</Text>
                    </TouchableOpacity>
                </View>
                {/********************************************************************************************/}
                <ScrollView>
                    <View style={{flexDirection: 'column', marginTop: 20}}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#F8F8F8',
                            borderColor: '#E0E0E0',
                            borderWidth: 1
                        }}>
                            <CheckBox
                                checkedIcon={<Image style={{width: 20, height: 20}}
                                                    source={require('../Assets/Images/Icons/ic_checkbox_active.png')}/>}
                                uncheckedIcon={<Image style={{width: 20, height: 20}}
                                                      source={require('../Assets/Images/Icons/ic_checkbox_normal.png')}/>}
                                checked={this.state.checked}
                                onPress={() => this.setState({checked: !this.state.checked})}
                            />
                            <Image style={{width: 30, height: 30}}
                                   source={require('../Assets/Images/Icons/ico_shop.png')}/>
                            <TouchableOpacity style={{marginLeft: 5,}}><Text style={{fontWeight: '500'}}>Nike Official
                                Store</Text></TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#FFF',
                            paddingTop: 10
                        }}>
                            <CheckBox
                                checkedIcon={<Image style={{width: 20, height: 20}}
                                                    source={require('../Assets/Images/Icons/ic_checkbox_active.png')}/>}
                                uncheckedIcon={<Image style={{width: 20, height: 20}}
                                                      source={require('../Assets/Images/Icons/ic_checkbox_normal.png')}/>}
                                checked={this.state.checked}
                                onPress={() => this.setState({checked: !this.state.checked})}
                            />
                            <View style={{width: '65%'}}>
                                <Text numberOfLines={1}>Air Jordan 6 Retro SP Shoe</Text>
                                <Text numberOfLines={1} style={{
                                    fontWeight: '600',
                                    color: '#555',
                                    marginTop: 5
                                }}>Rp {this.state.price}</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    width: 90,
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    borderColor: '#BBB',
                                    marginBottom: 10,
                                    marginTop: 10
                                }}>
                                    <TouchableOpacity onPress={() => this._DecreaseQty()} style={{
                                        flex: 1,
                                        backgroundColor: '#F7F7F7',
                                        padding: 10
                                    }}><Text>-</Text></TouchableOpacity>
                                    <View style={{
                                        flex: 1,
                                        backgroundColor: '#F7F7F7',
                                        padding: 10,
                                        borderLeftWidth: 1,
                                        borderRightWidth: 1,
                                        borderColor: '#BBB'
                                    }}><Text>{this.state.qty}</Text></View>
                                    <TouchableOpacity onPress={() => this._IncreaseQty()} style={{
                                        flex: 1,
                                        backgroundColor: '#F7F7F7',
                                        padding: 10
                                    }}><Text>+</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end', marginRight: 10}}>
                                <Image style={{justifyContent: 'flex-start', width: 50, borderRadius:3,height: 50}}
                                       source={require('../Assets/DummyData/Image/air-jordan-7-retro-sp-shoe.jpg')}/>
                                <TouchableOpacity onPress={() => alert('Delete Cuy ?')}><Image
                                    style={{marginTop: 15, marginBottom: 5, width: 28, height: 28, opacity: 0.5}}
                                    source={require('../Assets/Images/Icons/ico_trash.png')}/></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#F8F8F8',
                            borderColor: '#E0E0E0',
                            borderWidth: 1
                        }}>
                            <View style={{marginTop: 10, marginLeft: 60, marginBottom: 10, flex: 1}}>
                                <Text>SUBTOTAL</Text>
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: '500',
                                    color: '#333'
                                }}>Rp {this.state.price * this.state.qty}</Text>
                                <Text style={{fontSize: 8}}>Belum termasuk ongkir</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={{
                                    backgroundColor: '#D71149',
                                    borderRadius: 3,
                                    marginRight: 20,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    paddingTop: 5,
                                    paddingBottom: 5
                                }}><Text style={{color: '#FFF'}}>Bayar</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={{flexDirection: 'column', marginTop: 20}}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#F8F8F8',
                            borderColor: '#E0E0E0',
                            borderWidth: 1
                        }}>
                            <CheckBox
                                checkedIcon={<Image style={{width: 20, height: 20}}
                                                    source={require('../Assets/Images/Icons/ic_checkbox_active.png')}/>}
                                uncheckedIcon={<Image style={{width: 20, height: 20}}
                                                      source={require('../Assets/Images/Icons/ic_checkbox_normal.png')}/>}
                                checked={this.state.checked}
                                onPress={() => this.setState({checked: !this.state.checked})}
                            />
                            <Image style={{width: 30, height: 30}}
                                   source={require('../Assets/Images/Icons/ico_shop.png')}/>
                            <TouchableOpacity style={{marginLeft: 5,}}><Text style={{fontWeight: '500'}}>Nike Official
                                Store</Text></TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#FFF',
                            paddingTop: 10
                        }}>
                            <CheckBox
                                checkedIcon={<Image style={{width: 20, height: 20}}
                                                    source={require('../Assets/Images/Icons/ic_checkbox_active.png')}/>}
                                uncheckedIcon={<Image style={{width: 20, height: 20}}
                                                      source={require('../Assets/Images/Icons/ic_checkbox_normal.png')}/>}
                                checked={this.state.checked}
                                onPress={() => this.setState({checked: !this.state.checked})}
                            />
                            <View style={{width: '65%'}}>
                                <Text numberOfLines={1}>Air Jordan 6 Retro SP Shoe</Text>
                                <Text numberOfLines={1} style={{
                                    fontWeight: '600',
                                    color: '#555',
                                    marginTop: 5
                                }}>Rp {this.state.price}</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    width: 90,
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    borderColor: '#BBB',
                                    marginBottom: 10,
                                    marginTop: 10
                                }}>
                                    <TouchableOpacity onPress={() => this._DecreaseQty()} style={{
                                        flex: 1,
                                        backgroundColor: '#F7F7F7',
                                        padding: 10
                                    }}><Text>-</Text></TouchableOpacity>
                                    <View style={{
                                        flex: 1,
                                        backgroundColor: '#F7F7F7',
                                        padding: 10,
                                        borderLeftWidth: 1,
                                        borderRightWidth: 1,
                                        borderColor: '#BBB'
                                    }}><Text>{this.state.qty}</Text></View>
                                    <TouchableOpacity onPress={() => this._IncreaseQty()} style={{
                                        flex: 1,
                                        backgroundColor: '#F7F7F7',
                                        padding: 10
                                    }}><Text>+</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end', marginRight: 10}}>
                                <Image style={{justifyContent: 'flex-start', width: 50, height: 50}}
                                       source={require('../Assets/DummyData/Image/air-jordan-7-retro-sp-shoe.jpg')}/>
                                <TouchableOpacity onPress={() => alert('Delete Cuy ?')}><Image
                                    style={{marginTop: 15, marginBottom: 5, width: 28, height: 28, opacity: 0.5}}
                                    source={require('../Assets/Images/Icons/ico_trash.png')}/></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#F8F8F8',
                            borderColor: '#E0E0E0',
                            borderWidth: 1
                        }}>
                            <View style={{marginTop: 10, marginLeft: 60, marginBottom: 10, flex: 1}}>
                                <Text>SUBTOTAL</Text>
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: '500',
                                    color: '#333'
                                }}>Rp {this.state.price * this.state.qty}</Text>
                                <Text style={{fontSize: 8}}>Belum termasuk ongkir</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={{
                                    backgroundColor: '#D71149',
                                    borderRadius: 3,
                                    marginRight: 20,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    paddingTop: 5,
                                    paddingBottom: 5
                                }}><Text style={{color: '#FFF'}}>Bayar</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={{flexDirection: 'column', marginTop: 20}}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#F8F8F8',
                            borderColor: '#E0E0E0',
                            borderWidth: 1
                        }}>
                            <CheckBox
                                checkedIcon={<Image style={{width: 20, height: 20}}
                                                    source={require('../Assets/Images/Icons/ic_checkbox_active.png')}/>}
                                uncheckedIcon={<Image style={{width: 20, height: 20}}
                                                      source={require('../Assets/Images/Icons/ic_checkbox_normal.png')}/>}
                                checked={this.state.checked}
                                onPress={() => this.setState({checked: !this.state.checked})}
                            />
                            <Image style={{width: 30, height: 30}}
                                   source={require('../Assets/Images/Icons/ico_shop.png')}/>
                            <TouchableOpacity style={{marginLeft: 5,}}><Text style={{fontWeight: '500'}}>Nike Official
                                Store</Text></TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#FFF',
                            paddingTop: 10
                        }}>
                            <CheckBox
                                checkedIcon={<Image style={{width: 20, height: 20}}
                                                    source={require('../Assets/Images/Icons/ic_checkbox_active.png')}/>}
                                uncheckedIcon={<Image style={{width: 20, height: 20}}
                                                      source={require('../Assets/Images/Icons/ic_checkbox_normal.png')}/>}
                                checked={this.state.checked}
                                onPress={() => this.setState({checked: !this.state.checked})}
                            />
                            <View style={{width: '65%'}}>
                                <Text numberOfLines={1}>Air Jordan 6 Retro SP Shoe</Text>
                                <Text numberOfLines={1} style={{
                                    fontWeight: '600',
                                    color: '#555',
                                    marginTop: 5
                                }}>Rp {this.state.price}</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    width: 90,
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    borderColor: '#BBB',
                                    marginBottom: 10,
                                    marginTop: 10
                                }}>
                                    <TouchableOpacity onPress={() => this._DecreaseQty()} style={{
                                        flex: 1,
                                        backgroundColor: '#F7F7F7',
                                        padding: 10
                                    }}><Text>-</Text></TouchableOpacity>
                                    <View style={{
                                        flex: 1,
                                        backgroundColor: '#F7F7F7',
                                        padding: 10,
                                        borderLeftWidth: 1,
                                        borderRightWidth: 1,
                                        borderColor: '#BBB'
                                    }}><Text>{this.state.qty}</Text></View>
                                    <TouchableOpacity onPress={() => this._IncreaseQty()} style={{
                                        flex: 1,
                                        backgroundColor: '#F7F7F7',
                                        padding: 10
                                    }}><Text>+</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end', marginRight: 10}}>
                                <Image style={{justifyContent: 'flex-start', width: 50, height: 50}}
                                       source={require('../Assets/DummyData/Image/air-jordan-7-retro-sp-shoe.jpg')}/>
                                <TouchableOpacity onPress={() => alert('Delete Cuy ?')}><Image
                                    style={{marginTop: 15, marginBottom: 5, width: 28, height: 28, opacity: 0.5}}
                                    source={require('../Assets/Images/Icons/ico_trash.png')}/></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#F8F8F8',
                            borderColor: '#E0E0E0',
                            borderWidth: 1
                        }}>
                            <View style={{marginTop: 10, marginLeft: 60, marginBottom: 10, flex: 1}}>
                                <Text>SUBTOTAL</Text>
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: '500',
                                    color: '#333'
                                }}>Rp {this.state.price * this.state.qty}</Text>
                                <Text style={{fontSize: 8}}>Belum termasuk ongkir</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={{
                                    backgroundColor: '#D71149',
                                    borderRadius: 3,
                                    marginRight: 20,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    paddingTop: 5,
                                    paddingBottom: 5
                                }}><Text style={{color: '#FFF'}}>Bayar</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>


                </ScrollView>
                {/********************************************************************************************/}
                <View style={{backgroundColor: '#FFF', alignItems: 'center', padding: 15, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 12, fontWeight: '300'}}>TOTAL BELANJA</Text>
                        <Text style={{fontWeight: '400', color: '#000'}}>Rp 2000000</Text>
                        <Text style={{fontSize: 10}}>Belum termasuk ongkir</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Checkout')}
                        style={{
                        backgroundColor: '#D71149',
                        alignItems: 'center',
                        padding: 10,
                        justifyContent: 'center',
                        height: 35,
                        borderRadius: 3
                    }}><Text style={{fontSize: 14, fontWeight: '400', color: '#FFF'}}> Bayar </Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Cart;