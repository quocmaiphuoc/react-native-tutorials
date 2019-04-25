import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import Item from './Item'

export default class List extends Component {

    render() {
        return (
            <View style={{backgroundColor: "#7f8c8d", justifyContent: 'center', alignItems: 'center', height: 200, flexDirection: 'row'}}>
                <Item></Item>
                <Item></Item>
            </View>
        );
    }
    
}
