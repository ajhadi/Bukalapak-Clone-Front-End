import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class SortModal extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }

    closeModal = () => {
        this.props.setModalVisibility(false);
    }

    render (){
        return (
            <View style={styles.contentContainer}>
                <TouchableOpacity activeOpacity={1} style={styles.contentSide} onPress={() => this.closeModal()} ></TouchableOpacity>
                <View style={styles.modal}>
                    <TouchableOpacity style={styles.buttonView}>
                        <Text style={styles.text}> Belum dibeli </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView}>
                        <Text style={styles.text}> Sudah dibeli </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView}>
                        <Text style={styles.text}> Diskon </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView}>
                        <Text style={styles.text}> Semua </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        top:0,
        flex:1,
    },
    contentSide:{
        flex:1,
        opacity:0
    },
    modal:{
        backgroundColor:'#FFF',
        position:'absolute',
        right:2,
        width:200,
        top:122,
        alignContent:'center',
        justifyContent:'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.6,
        elevation: 3,
        borderRadius:2
    },
    text:{
        left:3,
        fontSize:15,
        color:'#000'
    },
    buttonView:{
        margin:12
    }

  });