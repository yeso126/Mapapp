import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import InitialScreen from './screens/initialScreen';
import Game from './screens/gameScreen';


const Mapapp = StackNavigator({
  Home: { screen: InitialScreen },
  Game: { screen: Game},

});


AppRegistry.registerComponent('Mapapp', () => Mapapp);
