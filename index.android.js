import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'mobx-react';
import store from './stores/index';

import InitialScreen from './screens/initialScreen';

import Easy from './screens/easy';
import Hard from './screens/hard';

const Routes = StackNavigator({
  Home:   { screen: InitialScreen },
  Easy:   { screen: Easy},
  Hard:   { screen: Hard},
});

export default class Mapapp extends Component {
  render() {
    return (
      <Provider {...store}>
        <Routes/>
      </Provider>
    );
  }
}



AppRegistry.registerComponent('Mapapp', () => Mapapp);
