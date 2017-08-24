import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import { NavigationActions } from 'react-navigation';


const {width, height} = Dimensions.get('window');

const navigateAction = NavigationActions.navigate({
  routeName: 'Game',
  params: {},
  action: NavigationActions.navigate({ routeName: 'Game'}),
});

export default class Mapapp extends Component {
    static navigationOptions = {
      title: 'JS powered Native Game',
      headerTintColor: 'rgb(231, 142, 24)',
    };
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


    onPressButton = () =>{
      this.props.navigation.dispatch(navigateAction);
    }


    render() {
      return (
        <View style={styles.container}>

          <TouchableNativeFeedback
            onPress={this.onPressButton}
            delayPressIn={1}
            background={TouchableNativeFeedback.Ripple('#002637')}
          >

            <Animated.View style ={[{
              width: this.state.animate,
              height: this.state.animate,
            }, styles.animatedView]}
            />



          </TouchableNativeFeedback>

          <Animated.Text style ={[{
            top:this.state.animateXY.y,
            left: this.state.animateXY.x},
          styles.animatedText]}
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
    backgroundColor: '#002637',
  },
  animatedView: {
    borderRadius: 1000,
    backgroundColor: ' rgb(175, 213, 171) ',
  },
  animatedText: {
    position: 'absolute',
    fontSize: 20,
  },
});
