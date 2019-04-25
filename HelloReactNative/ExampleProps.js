import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

class Greeting extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <View style={{alignItems: 'center'}}>
                <Text>Hello {this.props.name} !</Text>
            </View>
        )
    }
}

export default class ExampleProps extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (
            <View>
                <Image source= {pic} style={{width: 193, height: 110}}></Image>
                <Greeting name="Quoc"></Greeting>
            </View>
        );
    }
}