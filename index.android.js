/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';

export default class Mapapp extends Component {
  constructor(){
    super()
    this.state = {
      animate: new Animated.Value(30),
      animateXY: new Animated.ValueXY({
        x:0,
        y:0
      })
    }
  }

  componentWillMount(){
    Aniamted.timing()
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Text>
          This is an animated text
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});

AppRegistry.registerComponent('Mapapp', () => Mapapp);
