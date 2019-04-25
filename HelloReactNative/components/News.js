import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Profile from './Profile.js'
import List from './List.js'

export default class  extends Component {
    
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:"#3498db"}}>
                    <Profile></Profile>
                </View>
                <View style={{flex:2, backgroundColor:"#ecf0f1"}}>
                    <List></List>
                    <List></List>
                    <List></List>
                </View>
            </View>
        );
    }
    
}
