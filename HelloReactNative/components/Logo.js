import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import Durex from '../image/dt.png'


export default class  extends Component {
    render() {
        return (
            <View style={{justifyContent:'center', alignItems: 'center'}}>
                <Image source={Durex} style={{width: 100,height:50 }}></Image>
                <Text style={{fontSize: 30}}>Mấy em quá chuối</Text>
            </View>
        );
    }
    
}
