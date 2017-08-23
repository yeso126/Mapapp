/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Game extends Component {
  static navigationOptions = {
    title: 'Prepare to die',
  };


  componentWillMount (){
    Math.floor((Math.random() * 100) + 1);
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Game component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
