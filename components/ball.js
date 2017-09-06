/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      animateXY: new Animated.ValueXY({
        x: Math.floor((Math.random() * width) + 1),
        y:0,
      }),
      reset: false,
    };
  }

  componentWillMount () {
    this.fall();
  }


  fall = () => {
    this.state.animateXY.setValue({
      x: Math.floor((Math.random() * width) + 1 ),
      y:0});

    Animated.timing(this.state.animateXY, {
      toValue: {
        x: Math.floor((Math.random() * width) + 1),
        y: height},
      duration: 1200,
      useNativeDriver: true,
    }).start((animation) => {
      if (animation.finished) {
        this.fall();
      }
    });
  }

  _onPressButton (){
    Alert.alert('Alert');
  }


  render() {
    const transX = Animated.diffClamp(this.state.animateXY.x, 0, 80)
      .interpolate({
        inputRange: [0, 1],
        outputRange: [1, -1],
      });
    return (
      <View style= {styles.container}>
        <TouchableWithoutFeedback onPress={this._onPressButton}>
          <Animated.View style={[styles.balls,{
            translateY: this.state.animateXY.y,
            translateX: transX,
            backgroundColor: this.props.color,
          }]}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  balls: {
    borderRadius: 1000,
    // backgroundColor: ' rgb(175, 213, 171) ',
    width: 90,
    height: 90,
  },

});
