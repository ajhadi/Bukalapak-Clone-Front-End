import React, {Component} from 'react';
import {Text, View} from 'react-native';




import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from "rn-viewpager";

class AkunScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: 20,
                }}>

                    <Text
                        style={{
                            color: '#000000',
                            fontSize: 20
                        }}
                    >X</Text>
                    <Text style={{
                        color: '#000000',
                        fontSize: 17
                    }}>Keuntungan Mendaftar</Text>
                    <Text style={{
                        color: '#ff0026'
                    }}>Menu Lain</Text>
                </View>
                <View style={{
                    backgroundColor:'blue',
                    flex:1
                }}>
                    <IndicatorViewPager style={{
                        height:200
                    }}>
                        <View style={{backgroundColor:'#6bf8ff'}}>
                            <Text>1</Text>
                        </View>
                        <View style={{backgroundColor:'#ff0c00'}}>
                            <Text>2</Text>
                        </View>
                        <View style={{backgroundColor:'#979797'}}>
                            <Text>3</Text>
                        </View>
                    </IndicatorViewPager>
                </View>

                <View  style={{
                    width: '100%',
                    height: 50,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 0,
                    flexDirection:'row',
                    padding:20,
                    marginBottom:15,
                }}>
                    <View style={{
                        backgroundColor:'#979797',
                        margin:10,
                        width:'45%',
                        alignItems:'center',
                        paddingTop:15,
                        paddingBottom:15,
                    }}>
                        <Text
                            style={{
                                color:'#fff',
                                fontSize:17
                            }}
                        >Login</Text>
                    </View>
                    <View style={{
                        backgroundColor:'#ff0026',
                        width:'45%',
                        margin:10,
                        paddingTop:15,
                        paddingBottom:15,
                        alignItems:'center',
                    }}>
                        <Text style ={{
                            color:'#fff',
                            fontSize:17
                        }}>Daftar Akun</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default AkunScreen;