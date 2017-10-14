import { observable } from 'mobx';
import {AsyncStorage} from 'react-native';

export default class score {
  @observable bestTime= null;
  @observable winLost= null;

  getScore(){
    AsyncStorage.getItem('bestTime').then((value)=>{
      console.log(value);
      return this.bestTime= value;
    });
  }

}
