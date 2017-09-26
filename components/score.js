import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('gameStore')
@observer
export default class Score extends Component {

  componentWillUnmount(){
    this.props.gameStore.resetScore();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style= {styles.text} >Remaining: {this.props.gameStore.remainingBalls}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',

  },
  text:{
    fontSize: 20,
  },
});


Score.propTypes = {
  remainingBalls: React.PropTypes.number,
  resetScore: React.PropTypes.object,
  gameStore: React.PropTypes.object,
};
