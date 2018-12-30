/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ModuleHeader from './ModuleHeader';
import MainAppDateSelector from './MainAppDateSelector';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ModuleHeader/>
      <MainAppDateSelector/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'lightblue',
  }
 
});
