/* @flow */
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { observer, inject } from 'mobx-react';

import Ball from '../components/ball';
import Timer from '../components/timer';

@inject('timeStore')
@observer
export default class Game extends Component {
  static navigationOptions = {
    title: 'Hard',
    headerTintColor: 'rgb(231, 142, 24)',
  };


  render() {

    return (
      <View style= {[styles.container, {
        backgroundColor: this.props.timeStore.countDown < 5 ? '#c13434' : '#baffbb',
      }]}
      >
        <Timer start={Date.now()} />
        <Ball color="blue"/>
        <Ball color="magenta"/>
        <Ball color="green"/>
        <Ball color="red"/>
        <Ball color="magenta"/>
        <Ball color="red"/>
        <Ball color="green"/>
        <Ball color="purple"/>
        <Ball color="magenta"/>
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

Game.propTypes = {
  countDown: React.PropTypes.number,
  timeStore: React.PropTypes.object,
};
