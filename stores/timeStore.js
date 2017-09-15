import { observable } from 'mobx';


export default class time {

  @observable countDown = 20

  timeInterval(){
    this.timer = setInterval(this.tickInterval.bind(this), 1000);
  }

  tickInterval(){
    this.countDown--;
    // Ticks counting down
    if (this.countDown == 0) {
      clearInterval(this.timer);
    }
    // When timer reaches 0
  }
  clearInterval(){
    this.countDown = 20;
    clearInterval(this.timer);
  }
}
