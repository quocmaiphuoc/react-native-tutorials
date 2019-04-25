import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


export default class TextIputItem extends Component {
    
    render() {
        return (
            <View 
                style={{justifyContent:'center', alignItems:'center', 
                        backgroundColor: '#7f8c8d', height: 60, 
                        borderRadius:20,marginTop: 10}}
            >
                <Text style={{color: 'white'}}>{this.props.text}</Text>
            </View>
        );
    }
    
}

