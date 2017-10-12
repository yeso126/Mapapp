import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import logo from '../img/logo.png';
const {width, height} = Dimensions.get('window');


export default class Logo extends Component {
  constructor(){
    super();
    this.state = {
      animateXY: new Animated.ValueXY({
        x: width /2-75,
        y:0,
      }),
      animate: new Animated.Value(1),
    };
  }


  componentWillMount(){
    this.state.animate.resetAnimation();
    this.state.animateXY.resetAnimation();
    Animated.parallel([
      Animated.timing(this.state.animateXY, {
        toValue: {x: width /2 -75, y: height /2 -55},
        duration: 1000,
      }),
      Animated.timing(this.state.animate, {
        toValue: 250,
        duration: 1000,
      }),
    ]).start();

  }

  render() {
    return (
      <View>

        <Image
          source={require('../img/logo.png')}
          style ={styles.animatedView}
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  animatedView: {
    width:300,
    height:300,
  },
  animatedText: {
    position: 'absolute',
    fontSize: 20,
    top: 100,
    left: 100,
  },
});

Logo.propTypes = {
  navigation: React.PropTypes.object,
};
