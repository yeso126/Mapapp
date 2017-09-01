import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';

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

        <TouchableNativeFeedback
          delayPressIn={1}
          background={TouchableNativeFeedback.Ripple('#002637')}
        >
          <Animated.View style ={[{
            width: this.state.animate,
            height: this.state.animate,
          }, styles.animatedView]}
          >

            <Animated.Text style ={[{
              top:this.state.animateXY.y,
              left: this.state.animateXY.x},
            styles.animatedText]}
            >
            Logo
            </Animated.Text>
          </Animated.View>
        </TouchableNativeFeedback>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  animatedView: {
    borderRadius: 1000,
    backgroundColor: ' rgb(175, 213, 171) ',
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
