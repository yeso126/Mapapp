import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import InitialScreen from './screens/initialScreen';
import Easy from './screens/easy';
import Medium from './screens/medium';
import Hard from './screens/hard';

const Mapapp = StackNavigator({
  Home:   { screen: InitialScreen },
  Easy:   { screen: Easy},
  Medium: { screen: Medium},
  Hard:   { screen: Hard},

});


AppRegistry.registerComponent('Mapapp', () => Mapapp);
