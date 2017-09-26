import { observable } from 'mobx';
import {Alert} from 'react-native';

export default class time {

  @observable countDown = 60
  @observable gameDone = false

  timeInterval(){
    this.timer = setInterval(this.tickInterval.bind(this), 1000);
  }

  tickInterval(){
    this.countDown--;
    // Ticks counting down
    if (this.countDown == 0) {
      clearInterval(this.timer);
      Alert.alert(
        'You lost',
        'You just got Rekt',
        [
          {text: 'Keep playing', onPress: () => console.log('rekt')},
        ]);
      this.gameDone = true;
    }
  }
  resetInterval(){
    this.countDown = 60;
    clearInterval(this.timer);
  }

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
      clearInterval(this.timer);
    }
  }


  resetScore() {
    this.remainingBalls = 10;
    // resetScore to default when unmounting component
  }


}
