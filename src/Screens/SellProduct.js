import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    ScrollView,
    CheckBox,
    StatusBar,
    Image
} 
from 'react-native';
import ImagePicker from 'react-native-image-picker';

const {width, height} = Dimensions.get('window');
const options = {
    title: 'Upload Photo',
    takePhotoButtonTitle: 'Camera',
    chooseFromLibraryButtonTitle: 'Galery',
}
export default class SellProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource:null
        }
    }
    getImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            
            } else {
              const source = { uri: response.uri };
           
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
           
              this.setState({
                avatarSource: source,
              });
            }
          });
    }
    render(){
        return(
            <View>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content"/>
                <View style={styles.header}>
                    <TouchableOpacity style={{width: 50}}>
                        <Image style={styles.headIcon} source={require('../Assets/Images/Icons/ic_back.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.headTitle}>
                        Jual Barang
                    </Text>
                    <View style={{width: 50}}></View>
                </View>
                <ScrollView>
                    <View style={styles.container}> 
                        <View style={{flex:1}}>
                            <Text>Nama Barang</Text>
                            <TextInput style={styles.input} placeholder={'Masukkan nama barang'}/>
                        </View>
                        <View style={styles.contain}>
                            <Text>Kategori</Text>
                            <TextInput style={styles.input} placeholder={'Pilih kategori'}/>
                        </View>
                        <View style={[styles.contain,{flexDirection:'row'}]}>
                            <View style={{flex:2}}>
                                <Text>Harga</Text>
                                <View style={[styles.form,{width:width*0.53}]}>
                                    <Text style={styles.text}>Rp</Text>
                                    <TextInput style={{width:130,marginHorizontal:5}} value={'0'}/>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Stok</Text>
                                <TextInput style={styles.input} value={'1'}/>
                            </View>
                        </View>
                        <View style={styles.contain}>
                            <Text>Berat</Text>
                            <View style={{flexDirection:'row'}}>
                                <View style={[styles.form,{width:width*0.7}]}>
                                    <TextInput style={{width:width*0.478,marginHorizontal:5}} value={'0'}/>    
                                    <Text style={styles.text}>gram</Text>
                                </View>
                                <CheckBox/>
                                <Text>Baru</Text>                       
                            </View>
                        </View>
                        <View style={styles.contain}>
                            <Text>Deskripsi Barang</Text>
                            <TextInput style={styles.input} placeholder={'Isi deskripsi barangmu'}/>
                        </View>
                        <View style={styles.contain}>
                            <Text>Foto</Text>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Image style={{width: 40, height: 40}} source={this.state.avatarSource}/>
                            </View>
                            <TouchableOpacity onPress={this.getImage} style={[styles.btn,{backgroundColor:'#ddd'}]}>
                                <Text style={{fontWeight:'bold'}}>Tambah Foto Barang</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.contain,{marginTop:10}]}>
                            <TouchableOpacity style={[styles.btn,{backgroundColor:'#D71149'}]}>
                                <Text style={{color:'#fff'}}>Jual Barang</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.contain,{alignItems:'center',marginTop:-30}]}>
                            <TouchableOpacity>
                                <Text style={{color:'red',fontSize:17}}>Lengkapi Detail Barang</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
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
    container: {
        flex:1,
        paddingHorizontal:15,
        width,
        height,
        marginTop:15
    },
    input: {
        borderWidth:1,
        padding:10,
        borderColor:'#ddd',
        borderRadius: 7,
        marginTop:5
    },
    contain: {
        flex:1,
        marginTop:-20
    },
    btn: {
        padding:10,
        alignItems:'center',
        backgroundColor:'#ddd',
        borderRadius:6
    },
    text: {
        paddingHorizontal:15,
        paddingVertical:10,
        backgroundColor:'#ddd',
        fontWeight:'bold'
    },
    form: {
        borderWidth:1,
        flexDirection:'row',
        borderColor:'#ddd',
        borderRadius:7
    }
});