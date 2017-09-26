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
    // title: 'Hard',
    // headerTintColor: 'rgb(231, 142, 24)',
    header: null,
  };


  render() {

    return (
      <View>

        <View style= {[styles.container, {
          backgroundColor: this.props.gameStore.countDown < 5 ? '#c13434' : '#baffbb',
        }]}
        >

          <BallTopDown color="blue"/>
          <BallDownTop color="#ff7300"/>
          <BallTopDown color="green"/>
          <BallDownTop color="indigo"/>
          <BallTopDown color="maroon"/>
          <BallDownTop color="#780729"/>
          <BallTopDown color="brown"/>
          <BallDownTop color="olive"/>
          <BallTopDown color="purple"/>
          <BallDownTop color="magenta"/>


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
    backgroundColor: 'white',
  },
});

Game.propTypes = {
  countDown: React.PropTypes.number,
  gameStore: React.PropTypes.object,
};
