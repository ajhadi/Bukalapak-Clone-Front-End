import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Image,
    TextInput,
    Modal
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import DateTimePicker from "react-native-modal-datetime-picker";
import { connect } from "react-redux";
import { updateAccount } from '../Services/Axios/account';

const options = {
    title: 'Upload Photo',
    takePhotoButtonTitle: 'Camera',
    chooseFromLibraryButtonTitle: 'Galery',
}

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.account.data.username || '',
            name: this.props.account.data.name || '',
            birth: this.props.account.data.birth || 'Pilih',
            gender: this.props.account.data.gender || 'Laki-laki',
            _ModalVisible: false,
            isDateTimePickerVisible: false,
            avatarSource:null
        }
    }

    updateAccountApi = () => {
        const {name, birth, gender} = this.state;
        this.props.dispatch(updateAccount(this.props.account.token, {name, birth, gender}));
    }
    
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };
    
    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };
    
    dateFormat = (d) => {
        let date = new Date(d);

        if (isNaN(date.getTime())) {
            return d;
        }
        else {
            let month = new Array();
            month[0] = "01";
            month[1] = "02";
            month[2] = "03";
            month[3] = "04";
            month[4] = "05";
            month[5] = "06";
            month[6] = "07";
            month[7] = "08";
            month[8] = "09";
            month[9] = "10";
            month[10] = "11";
            month[11] = "12";

            day = date.getDate();
            var yy = date.getFullYear().toString();

            if (day < 10) {
                day = "0" + day;
            }

            return day + "/" + month[date.getMonth()] + "/" + yy;
        }
    }

    handleDatePicked = date => {
        let newDate = this.dateFormat(date);
        this.setState({birth: newDate});
        this.hideDateTimePicker();
    };

    setModalVisibility = (bool) => {
        this.setState({_ModalVisible: bool});
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
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={{width: 25, height: 25}} source={require('../Assets/Images/Icons/ic_back.png')}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 18, color: '#000', fontWeight: '500'}}>Edit Profile</Text>
                    <View style={{width: 25, height: 25}}></View>
                </View>
                <ScrollView backgroundColor={'#fff'}>
                    <View style={styles.bar}>
                        <Image style={{width: 55, height: 56, borderRadius: 100}} source={this.state.avatarSource}/>
                        <TouchableOpacity onPress={this.getImage}>
                            <Text style={{color: 'red'}}>Edit Foto</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bar}>
                        <Text style={styles.textLeft}>Username</Text>
                        <Text style={styles.textRight}>{this.state.username}</Text>
                    </View>
                    <View style={styles.bar}>
                        <Text style={styles.textLeft}>Nama</Text>
                        <TextInput placeholder='Masukkan' style={[styles.textRight, { padding: 0 }]} onChangeText={(text) => this.setState({ name: text })}
                            defaultValue={this.props.account.data.name}/>
                    </View>
                    <View style={styles.bar}>
                        <Text style={styles.textLeft}>Tanggal Lahir</Text>
                        <TouchableOpacity onPress={this.showDateTimePicker}>
                            <Text style={styles.textRight}>{this.state.birth}</Text>
                            <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this.handleDatePicked}
                                onCancel={this.hideDateTimePicker}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bar}>
                        <Text style={styles.textLeft}>Jenis Kelamin</Text>
                        <TouchableOpacity onPress={() => this.setModalVisibility(true)}>
                            <Text style={styles.textRight}>{this.state.gender}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize: 12, color: '#bbb', padding: 20}}>Data kamu selalu dirahasiakan dan tidak
                        kami beritahukan kepada pihak ketiga.</Text>
                    <TouchableOpacity style={{
                        backgroundColor: '#D71149',
                        height: 45,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 2,
                        marginLeft: 20,
                        marginRight: 20,
                    }} onPress={this.updateAccountApi}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 17
                        }}>Simpan</Text>
                    </TouchableOpacity>

                    <Modal transparent={true} visible={this.state._ModalVisible}
                           onRequestClose={() => this.changeModalVisibility(false)}>
                        <TouchableOpacity activeOpacity={1} style={styles.contentSide}
                                          onPress={() => this.setModalVisibility(false)}></TouchableOpacity>
                        <View style={styles.modal}>
                            <TouchableOpacity style={styles.buttonView}>
                                <Text style={styles.text}>Laki-laki</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonView}>
                                <Text style={styles.text}>Perempuan</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
    },
    bar: {
        borderBottomWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    textLeft: {
        fontSize: 16,
        color: '#afafaf',
    },
    textRight: {
        color: '#000',
        fontSize: 16,
    },
    modal: {
        backgroundColor: '#FFF',
        position: 'absolute',
        right: 20,
        width: 140,
        bottom: 200,
        padding: 15,
        alignContent: 'center',
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.6,
        elevation: 3,
        borderRadius: 2
    },
    text: {
        left: 3,
        fontSize: 16,
        color: '#000',
        padding: 5,
    },
    contentSide: {
        flex: 1,
        opacity: 0
    },
});

const mapsStageToProps = (state) => {
    return {
        account: state.account
    }
};

export default connect(mapsStageToProps)(EditProfile);