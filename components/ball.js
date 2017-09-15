import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { observer, inject } from 'mobx-react';

const {width, height} = Dimensions.get('window');

@inject('timeStore')
@observer
export default class Ball extends Component {
  constructor(props){
    super(props);
    this.state = {
      animateXY: new Animated.ValueXY({
        x: 0,
        y:0,
      }),
      pressed: false,
    };
  }

  componentWillMount () {
    this.fall();
  }


  fall = () => {
    this.state.animateXY.setValue({
      x: Math.floor((Math.random() * width) + 1) ,
      y:0,
    });

    Animated.timing(this.state.animateXY, {
      toValue: {
        x: Math.floor((Math.random() * width) + 1) ,
        y: height},
      duration: 1200,
      useNativeDriver: true,
    }).start((animation) => {
      if (animation.finished) {
        this.fall();        // Loops animation
      }
      if (this.props.timeStore.countDown == 0) {
        this.state.animateXY.stopAnimation;  // Stops animation
        console.log('reached 0 ');
      }

    });
  }

  onPressButton () {
    this.setState({
      pressed: true,
    });
  }


  render() {
    return (
      <View style= {styles.container}>
        <TouchableWithoutFeedback onPress={this.onPressButton.bind(this)}>
          <Animated.View style={[styles.balls,{
            translateY: this.state.animateXY.y,
            translateX: this.state.animateXY.x,
            backgroundColor: this.props.color,
            borderColor: this.state.pressed ? 'black' : this.props.color,
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
    borderStyle: 'solid',
    borderWidth: 10,
    width: 70,
    height: 70,
  },

});

Ball.propTypes = {
  color: React.PropTypes.string,
  countDown: React.PropTypes.number,
  timeStore: React.PropTypes.object,
};
