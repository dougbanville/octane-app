import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class BeerDetailComponent extends Component {

  @action
  scrollTop(){
    console.log('scroll')
    window.scrollTo(0, 0);
  }
}
