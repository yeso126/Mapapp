import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';

import Logo from '../components/logo';

import { NavigationActions } from 'react-navigation';


const goToHighScores = new NavigationActions.navigate({
  routeName: 'HighScores',
  params: {},
  action: NavigationActions.navigate({ routeName: 'HighScores'}),
});

const goToHard = new NavigationActions.navigate({
  routeName: 'Hard',
  params: {},
  action: NavigationActions.navigate({ routeName: 'Hard'}),
});


export default class InitialScreen extends Component {
    static navigationOptions = {
      title: 'Tap Circles Saga',
      headerTintColor: '#e78e18',
    };


    goToHard = () =>{
      this.props.navigation.dispatch(goToHard);
    }
    goToHighScores = () =>{
      this.props.navigation.dispatch(goToHighScores);
    }


    render() {
      return (
        <View style={styles.container}>

          <Logo style={styles.logo}/>
          <View style={styles.buttonContainer}>

            <Button title="Start Game"
              onPress={this.goToHard}
            />


            <Button title="HighScores"
              onPress={this.goToHighScores}
            />

          </View>

        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#002637',
  },

  buttonContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logo:{
    alignSelf: 'center',
  },
});

InitialScreen.propTypes = {
  navigation: React.PropTypes.object,
};
