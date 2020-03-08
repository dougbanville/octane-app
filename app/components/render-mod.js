import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class RenderModComponent extends Component {

  @action
  hello(element, positionalParams, namedArgs){
    console.log(positionalParams, namedArgs)
    alert(`sup ${positionalParams[0]}?`)
  }
}
