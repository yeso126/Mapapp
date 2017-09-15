/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { observer, inject } from 'mobx-react';

@inject('timeStore')
@observer
export default class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      elapsed: 20,
    };
  }

  componentDidMount(){
    this.timer = setInterval(this.tick.bind(this) , 1000);
    // Ticks every seconds set to 1000
  }

  componentWillUnmount(){
    // Este metodo limpia el intervalo cada vez que se
    // quita el componente
    clearInterval(this.timer);
  }

  tick(){
    this.setState(prevState => ({
      elapsed: prevState.elapsed - 1,
    }));
    // Ticks counting down
    if (this.state.elapsed == 0) {
      clearInterval(this.timer);
    }
    // When timer reaches 0
  }

  render() {
    // let seconds = Math.round(this.state.elapsed / 100);
    let seconds = this.props.timeStore.time.countDown;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {seconds}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
});

Timer.propTypes = {
  start: React.PropTypes.number,
  countDown: React.PropTypes.number,
  timeStore: React.PropTypes.object,
};
