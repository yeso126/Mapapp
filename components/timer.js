import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { observer, inject } from 'mobx-react';

@inject('gameStore')
@observer
export default class Timer extends Component {

  componentDidMount(){
    this.props.gameStore.timeInterval();
  }

  componentWillUnmount(){
    this.props.gameStore.resetInterval();
  }

  render() {
    let seconds = this.props.gameStore.countDown;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Time:{seconds}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: 'absolute',
  },
  text: {
    fontSize: 20,
  },
});

Timer.propTypes = {
  start: React.PropTypes.number,
  countDown: React.PropTypes.number,
  gameStore: React.PropTypes.object,
};
