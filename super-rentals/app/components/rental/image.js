/*
  add behavior to components, use glimmer
*/
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class RentalImageComponent extends Component {
  /* 
    @tracked
    tells Ember to monitor this varibale for updates 
    Ember 는 its value 에 관련있는 any templates 를 자동으로 re-render 한다.
  */
  @tracked isLarge = false;

  /*
    @action
    our template 로부터 this method 를 사용하겠다는 것을 Ember 에게 말한다.
    callback function 을 적절하게 하게 한다.
  */
  @action
  toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
