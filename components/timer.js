/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { observer, inject } from 'mobx-react';

@inject('timeStore')
@observer
export default class Timer extends Component {

  componentDidMount(){
    this.props.timeStore.timeInterval();
  }

  componentWillUnmount(){
    this.props.timeStore.resetInterval();
  }

  render() {
    let seconds = this.props.timeStore.countDown;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {seconds}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
});

Timer.propTypes = {
  start: React.PropTypes.number,
  countDown: React.PropTypes.number,
  timeStore: React.PropTypes.object,
};
