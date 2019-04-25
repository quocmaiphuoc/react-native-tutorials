import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';


export default class Item extends Component {

    render() {
        let avatar = {
            uri: "http://i.pravatar.cc/300?img=56"
        }
        return (
            <View style={{backgroundColor: "#7f8c8d", justifyContent: 'center', alignItems: 'center', width: 200, height: 200}}>
                <Image source={avatar} style={{width: 150, height: 150}}></Image>
            </View>
        );
    }
    
}