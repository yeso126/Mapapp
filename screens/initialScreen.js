import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';

import Logo from '../components/logo';

import { NavigationActions } from 'react-navigation';

const goToEasy = new NavigationActions.navigate({
  routeName: 'Easy',
  params: {},
  action: NavigationActions.navigate({ routeName: 'Easy'}),
});

const goToMedium = new NavigationActions.navigate({
  routeName: 'Medium',
  params: {},
  action: NavigationActions.navigate({ routeName: 'Medium'}),
});

const goToHard = new NavigationActions.navigate({
  routeName: 'Hard',
  params: {},
  action: NavigationActions.navigate({ routeName: 'Hard'}),
});


export default class InitialScreen extends Component {
    static navigationOptions = {
      title: 'JS powered Native Game',
      headerTintColor: '#e78e18',
    };


    goToEasy = () =>{
      this.props.navigation.dispatch(goToEasy);
    }
    goToMedium = () =>{
      this.props.navigation.dispatch(goToMedium);
    }
    goToHard = () =>{
      this.props.navigation.dispatch(goToHard);
    }


    render() {
      return (
        <View style={styles.container}>

          <Logo style={styles.logo}/>
          <View style={styles.buttonContainer}>

            <Button title="easy"
              onPress={this.goToEasy}
            />
            <Button title="Medium"
              onPress={this.goToMedium}
            />
            <Button title="Hard"
              onPress={this.goToHard}
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
