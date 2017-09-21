import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Modal,
} from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('timeStore', 'scoreStore')
@observer
export default class WinLose extends Component {
  state={
    modalVisible: false,
  }

  componentDidMount() {
    this.stop();
  }

  stop= () => {
    if (this.props.timeStore.countDown == 0 ){
      this.setState({
        modalVisible: true,
      });
      console.log('stopped');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType= "slide"
          visible= {this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <Text>{this.props.timeStore.winLose }</Text>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});


WinLose.propTypes = {
  timeStore: React.PropTypes.object,
  scoreStore: React.PropTypes.object,
};
