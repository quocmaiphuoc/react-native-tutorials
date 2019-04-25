import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import TextIputItem from './TextIputItem'

export default class InputText extends Component {

    render() {
        return (
            <View style={{paddingHorizontal:20}}>
                <TextIputItem text="Username"></TextIputItem>
                <TextIputItem text="Password"></TextIputItem>
                <View style={{backgroundColor:"#e67e22", height: 60, borderRadius: 20,justifyContent: 'center', alignItems:'center',marginTop: 20}}>
                    <Text>Login</Text>
                </View>
            </View>
        );
    }
    
}

