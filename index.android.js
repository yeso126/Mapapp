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
    Animated.timing(this. state.animate, {
      toValue: 100,
      duraction: 1000
    }).start()
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style ={{width: this.state.animate, height: this.state.animate}}>
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
  }
});

AppRegistry.registerComponent('Mapapp', () => Mapapp);
