import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground
} from 'react-native';
import Logo from './Logo';
import InputText from './InputText'
import Footer from './Footer'
import Background from "../image/img.jpg"


export default class Layout extends Component {
    
    render() {
        return (
            <ImageBackground source={Background} style={{flex:1}}>
                <View style={{flex: 2,justifyContent:'center', alignItems:'center'}}>
                    <Logo></Logo>
                </View>
                <View style={{flex: 1}}>
                    <InputText></InputText>
                </View>
                <View style={{height: 60,justifyContent:'center', alignItems:'center'}}>
                    <Footer></Footer>
                </View>
            </ImageBackground>
            // <View style={{backgroundColor:'orange', flex:1, flexDirection:'column'}}>
                
            // </View>
        );
    }
    
}

