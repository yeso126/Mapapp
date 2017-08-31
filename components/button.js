import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableNativeFeedback,
} from 'react-native';
import { NavigationActions } from 'react-navigation';


// const {width, height} = Dimensions.get('window');

const navigateAction = NavigationActions.navigate({
  routeName: 'Game',
  params: {},
  action: NavigationActions.navigate({ routeName: 'Game'}),
});

export default class Button extends Component {
  constructor(props){
    super(props);
    this.state = {
      grow: new Animated.Value(0),
    };
  }


  componentWillMount(){
    Animated.timing(this.state.grow, {
      toValue: 100,
      duration: 1000,
    }).start();
  }


    onPressButton = () =>{
      this.props.navigation.dispatch(navigateAction);
    }


    render() {
      return (
        <View>

          <TouchableNativeFeedback
            onPress={this.onPressButton}
            delayPressIn={1}
            background={TouchableNativeFeedback.Ripple('#002637')}
          >
            <Animated.Text style ={[{
              width: this.state.grow,
              height: this.state.grow,
            }, styles.animatedView]}
            >
              {this.props.title}
            </Animated.Text>
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
});

Button.propTypes = {
  title: React.PropTypes.string,
  navigation: React.PropTypes.object,
};
