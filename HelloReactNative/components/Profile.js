import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';


export default class Profile extends Component {

    render() {
        let avatar = {
            uri: "http://i.pravatar.cc/300?img=54"
        }
        return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={avatar} style={{width:150, height: 150}}></Image>
                <Text style={{fontSize: 20, color: 'white'}}>Hello World</Text>
            </View>
        );
    }
    
}
