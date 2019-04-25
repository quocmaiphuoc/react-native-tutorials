/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ExampleState from './ExampleState'
import ExampleProps from './ExampleProps'
import ExamplePropType from './ExamplePropType'
import LifeCycleComponent from './LifeCycleComponent'
import Layout from './components/Layout'
import News from './components/News'

export default class App extends Component{
  render() {
    return (
      <View style={{flex:1}}>
        {/* <ExampleState></ExampleState>
        <ExampleProps></ExampleProps>
        <ExamplePropType></ExamplePropType>
        <LifeCycleComponent></LifeCycleComponent> */}
        {/* <Layout/> */}
        <News></News>
      </View>
    );
  }
}

