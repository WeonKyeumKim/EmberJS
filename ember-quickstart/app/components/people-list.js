import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class PeopleListComponent extends Component {
  @action
  showPerson(person) {
    /* 
        apos 를 사용하지 않는다.
        ${person} 는 [object MouseEvent] 를 display
      */
    alert(`The person's name is ${person}!`);
  }
}
