import { observable } from 'mobx';


export default class time {

  @observable remainingBalls = 10

  ballPressed(){
    this.remainingBalls --;
  }

  resetScore() {
    this.remainingBalls = 10;
    // resetScore to default when unmounting component
  }

}
