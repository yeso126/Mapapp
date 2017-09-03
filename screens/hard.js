import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Ball from '../components/ball';


export default class Game extends Component {
  static navigationOptions = {
    title: 'Hard',
    headerTintColor: 'rgb(231, 142, 24)',
  };


  render() {
    return (
      <View style= {styles.container}>
        <Ball color="blue"/>
        <Ball color="red"/>
        <Ball color="green"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
