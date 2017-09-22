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


@inject('timeStore', 'scoreStore')
@observer
export default class Ball extends Component {
  constructor(props){
    super(props);
    this.state = {
      pressed: false,
      posX:new Animated.Value(0),
      posY:new Animated.Value(-100),
    };
  }

  componentWillMount () {
    this.fall();
  }

  componentWillUnmount () {
    this.setState({
      pressed: false,
    });
    this.props.timeStore.gameDone = false;
  }

  fall = () => {
    this.state.posX.setValue(0);
    this.state.posY.setValue(-100);
    // resetsPositions when animation Loops

    Animated.timing(this.state.posX, {
      toValue: Math.floor((Math.random() * width) + 1),
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(this.state.posY,{
      toValue:  height,
      duration: 1000,
      useNativeDriver: true,
    }).start((animation) =>{
      if (animation.finished) {
        this.fall(); //loops animation
      }
    });

    if (this.props.timeStore.countDown == 0) {
      Animated.timing(
        this.state.posY
      ).stop();
      Animated.timing(
        this.state.posX
      ).stop();
    }

    if (this.props.timeStore.gameDone == true) {
      this.setState({
        pressed: true,
      });
    }
  }


  onPressButton () {
    this.setState({
      pressed: true,
    });
    // Sets state as pressed ... Duh
    if (this.state.pressed == false) {
      this.props.scoreStore.ballPressed();
      Animated.timing(
        this.state.posY
      ).stop();
      Animated.timing(
        this.state.posX
      ).stop();
    }
    //scoreCounts only when component have not been pressed
  }


  render() {

    const animatedBall = {
      backgroundColor: this.props.color,
      borderColor: this.state.pressed ? 'black' : this.props.color,
      translateX: this.state.posX,
      translateY: this.state.posY,
    };

    return (
      <View style= {styles.container} >
        <TouchableWithoutFeedback onPress={this.onPressButton.bind(this)}>
          <Animated.View style={[styles.balls, animatedBall]}/>
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
  ballPressed: React.PropTypes.object,
  scoreStore: React.PropTypes.object,
};
