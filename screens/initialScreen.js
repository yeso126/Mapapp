import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class Mapapp extends Component {
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
  static navigationOptions = {
  title: 'JS powered Native Game',
};

  componentWillMount(){
    Animated.parallel([
      Animated.timing(this. state.animateXY, {
        toValue: {x: width /2 -75, y: height /2 - 20},
        duraction: 1000,
      }),
      Animated.timing(this. state.animate, {
        toValue: 250,
        duraction: 1000,
      }),
    ]).start();
  }

  render() {
    return (
      <View style={styles.container}>

        <Animated.View style ={{
          borderRadius: 1000,
          backgroundColor: ' rgb(175, 213, 171) ',
          width: this.state.animate,
          height: this.state.animate,
        }}
        />

        <Animated.Text style ={styles.animatedText}
          >
            Tap here to start
        </Animated.Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  animatedText:{
    position:'absolute',
    top:{this.state.animateXY.y},
    left:{this.state.animateXY.x}}
  }
});
