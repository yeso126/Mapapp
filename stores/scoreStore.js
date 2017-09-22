import { observable } from 'mobx';
import {Alert} from 'react-native';

export default class time {

  @observable remainingBalls = 10

  ballPressed(){
    this.remainingBalls --;
    // removes one ball from the score when function gets exec
    if (this.remainingBalls == 0) {
      Alert.alert(
        'You Win',
        'Ok you did fine',
        [
          {text: 'Keep playing', onPress: () =>console.log('you win')},
        ]);
    }
  }


  resetScore() {
    this.remainingBalls = 10;
    // resetScore to default when unmounting component
  }


}
