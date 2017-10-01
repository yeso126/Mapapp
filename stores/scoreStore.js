import { observable } from 'mobx';
import {AsyncStorage} from 'react-native';

export default class score {
  @observable highScores= [];

  getScore(){
    AsyncStorage.getItem('bestTime').then((value)=> console.log(value));
    AsyncStorage.getItem('score').then((value)=> console.log(value));
  }

}
