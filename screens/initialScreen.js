import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';

// import sounds from '../sounds/sounds.js';
import Logo from '../components/logo';

import { NavigationActions } from 'react-navigation';
import { observer, inject } from 'mobx-react';

const goToHighScores = new NavigationActions.navigate({
  routeName: 'HighScores',
  params: {},
  action: NavigationActions.navigate({ routeName: 'HighScores'}),
});

const goToHard = new NavigationActions.navigate({
  routeName:  'Hard',
  params: {},
  action: NavigationActions.navigate({ routeName: 'Hard'}),
});


@inject('scoreStore')
@observer
export default class InitialScreen extends Component {
  static navigationOptions = {
    // title: 'Hard',
    // headerTintColor: 'rgb(231, 142, 24)',
    header: null,
  };

  componentDidMount(){
    this.props.scoreStore.getScore();
  }

    goToHard = () =>{
      this.props.navigation.dispatch(goToHard);
    }
    goToHighScores = () =>{
      this.props.navigation.dispatch(goToHighScores);
    }




    render() {
      return (
        <View style={styles.container}>

          <View>
            <Logo style={styles.logo}/>


          </View>


          <View style={styles.buttonContainer}>

            <Button
              title="Start Game"
              onPress={this.goToHard}
              color="#e4572e"
            />
            <View style={styles.button}>
              <Text style={styles.button_text}>
                your best time is {this.props.scoreStore.bestTime}s left
              </Text>
            </View>

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
    backgroundColor: '#f0f8ea',
  },

  buttonContainer: {
    justifyContent: 'center',
  },
  button:{
    alignItems:'center',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#e4572e',
    borderWidth: 5,
    borderColor: '#e4572e',
  },
  button_text:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo:{
    alignSelf: 'center',
  },
});

InitialScreen.propTypes = {
  navigation: React.PropTypes.object,
};
