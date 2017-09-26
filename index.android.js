import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'mobx-react';
import store from './stores/index';

import InitialScreen from './screens/initialScreen';
import HighScores from './screens/highScores';
import Hard from './screens/hard';

const Routes = StackNavigator({
  Home:       { screen: InitialScreen },
  Hard:       { screen: Hard},
  HighScores: { screen: HighScores},
});

export default class TapCirclesSaga extends Component {
  render() {
    return (
      <Provider {...store}>
        <Routes/>
      </Provider>
    );
  }
}



AppRegistry.registerComponent('TapCirclesSaga', () => TapCirclesSaga);
