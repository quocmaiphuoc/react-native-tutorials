import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';

class Greeting extends React.Component{
    render(){
        return(
            <Text>{this.props.name}</Text>
        )
    }
}

// Greeting.propTypes = {
//     name: PropTypes.string,
//     name: PropTypes.element.isRequired
// }
Greeting.defaultProps= {
    name: 'Stranger'
}

export default class ExamplePropType extends Component {

    render() {
        return (
            <Greeting ></Greeting>
        );
    }
    
}
