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
  static navigationOptions = {
    title: 'Prepare to die',
    headerTintColor: 'rgb(231, 142, 24)',
  };
  constructor(){
    super();
    this.state = {
      animateXY: new Animated.ValueXY({
        x: Math.floor((Math.random() * width) + 1),
        y:0,
      }),
      interval: null,
    };
  }


  componentWillMount (){

    // this.interval = setInterval(() => {
    //   let falling = Math.floor((Math.random() * 100) + 1);
    // }, 1000);

    // Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    Animated.timing(this.state.animateXY, {
      toValue: {x: Math.floor((Math.random() * width) + 1), y: 1000},
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }

  _onPressButton (){
    Alert.alert('Alert');
  }
  
  // onPress={this._onPressButton}

  render() {
    return (
      <View style= {styles.container}>
        <TouchableWithoutFeedback onPress={this._onPressButton}>
          <Animated.View style={[styles.balls,{
            translateY: this.state.animateXY.y,
            translateX: this.state.animateXY.x,
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
    backgroundColor: ' rgb(175, 213, 171) ',
    width: 90,
    height: 90,
  },

});
