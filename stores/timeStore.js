import { observable } from 'mobx';
import {Alert} from 'react-native';

export default class time {

  @observable countDown = 40
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
    this.countDown = 40;
    clearInterval(this.timer);
  }

}
