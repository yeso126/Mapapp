import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'mobx-react';
import stores from './stores/index';

import InitialScreen from './screens/initialScreen';

import Easy from './screens/easy';
import Medium from './screens/medium';
import Hard from './screens/hard';

const Routes = StackNavigator({
  Home:   { screen: InitialScreen },
  Easy:   { screen: Easy},
  Medium: { screen: Medium},
  Hard:   { screen: Hard},
});

export default class Mapapp extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Routes/>
      </Provider>
    );
  }
}



AppRegistry.registerComponent('Mapapp', () => Mapapp);
