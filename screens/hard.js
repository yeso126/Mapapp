import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { observer, inject } from 'mobx-react';
const {width, height} = Dimensions.get('window');


import Ball from '../components/ball';
import Timer from '../components/timer';
import Score from '../components/score';

@inject('timeStore')
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
          backgroundColor: this.props.timeStore.countDown < 5 ? '#c13434' : '#baffbb',
        }]}
        >

          <Ball color="blue"/>
          <Ball color="magenta"/>
          <Ball color="green"/>
          <Ball color="purple"/>
          <Ball color="red"/>
          <Ball color="magenta"/>
          <Ball color="red"/>
          <Ball color="green"/>
          <Ball color="purple"/>
          <Ball color="magenta"/>


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
    flexDirection: 'row',
    justifyContent: 'center',
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
  timeStore: React.PropTypes.object,
};
