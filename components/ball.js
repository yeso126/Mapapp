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

export default class Ball extends Component {
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
    // this.state.animateXY.addListener((currentValue) => {
    //   if (currentValue.x > width-40)  {
    //     Animated.timing(this.state.animateXY, {
    //       toValue:{
    //         x: currentValue.x - 600,
    //         y: height,
    //       },
    //       duration: 200,
    //     }).start();
    //     console.log('out of the screen');
    //   }
    // });
  }


  fall = () => {
    let random =  Math.floor((Math.random() * width) + 1);

    this.state.animateXY.setValue({
      x: random,
      // x: Animated.diffClamp(random + 20, 0 , width ),
      y:0});

    Animated.timing(this.state.animateXY, {
      toValue: {
        x: random,
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
    return (
      <View style= {styles.container}>
        <TouchableWithoutFeedback onPress={this._onPressButton}>
          <Animated.View style={[styles.balls,{
            translateY: this.state.animateXY.y,
            translateX: this.state.animateXY.x,
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
    width: 90,
    height: 90,
  },

});

Ball.propTypes = {
  color: React.PropTypes.string,
};
