import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('scoreStore')
@observer
export default class Score extends Component {

  componentWillUnmount(){
    this.props.scoreStore.resetScore();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style= {styles.text} >Remaining: {this.props.scoreStore.remainingBalls}</Text>
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
  scoreStore: React.PropTypes.object,
  resetScore: React.PropTypes.object,
};
