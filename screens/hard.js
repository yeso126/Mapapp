import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { observer, inject } from 'mobx-react';
const {width, height} = Dimensions.get('window');

import BallDownTop from '../components/ballDownTop';
import BallTopDown from '../components/ballTopDown';
import Timer from '../components/timer';
import Score from '../components/score';

@inject('gameStore')
@observer
export default class Game extends Component {
  static navigationOptions = {
    header: null,
  };


  render() {

    return (
      <View>

        <View style= {[styles.container, {
          backgroundColor: this.props.gameStore.countDown < 5 ? '#c13434' : '#f0f8ea',
        }]}
        >

          <BallTopDown color="#ff7900"/>
          <BallDownTop color="#00cb53"/>
          <BallTopDown color="#389dc3"/>
          <BallDownTop color="#fc4040"/>
          <BallDownTop color="#ffa800"/>
          <BallDownTop color="#780729"/>
          <BallTopDown color="#ff00a1"/>
          <BallDownTop color="#2238fc"/>
          <BallTopDown color="#b86f9e"/>
          <BallTopDown color="#ff0000"/>



        </View>

        <View style= {styles.scores}>
          <Timer/>
          <Score/>
        </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height -50,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  scores:{
    flexDirection: 'row',
    paddingRight: 20,
    justifyContent: 'space-around',
    backgroundColor: '#e4572e',
  },
});

Game.propTypes = {
  countDown: React.PropTypes.number,
  gameStore: React.PropTypes.object,
};
