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
  routeName: 'Easy',
  params: {},
  action: NavigationActions.navigate({ routeName: 'Easy'}),
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
      toValue: 80,
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
    borderRadius: 20,
    backgroundColor: ' rgb(175, 213, 171) ',
  },
});

Button.propTypes = {
  title: React.PropTypes.string,
  route: React.PropTypes.string,
  navigation: React.PropTypes.object,
};
