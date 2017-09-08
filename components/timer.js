/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      elapsed: 0,
    };
  }

  componentDidMount(){
    this.timer = setInterval(this.tick.bind(this) , 50);
  }

  componentWillUnmount(){
    // Este metodo limpia el intervalo cada vez que se
    // quita el componente
    clearInterval(this.timer);
  }

  tick(){
    this.setState({elapsed: new Date() - this.props.start});
  }

  render() {
    // Calculate elapsed to tenth of a second:
    let elapsed = Math.round(this.state.elapsed / 100);

    // This will give a number with one digit after the decimal dot (xx.x):
    let seconds = (elapsed / 10).toFixed(1);

    return (
      <View style={styles.container}>
        <Text>
          {seconds}
        </Text>
        <Text>
          {elapsed}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Timer.propTypes = {
  start: React.PropTypes.object,
};
