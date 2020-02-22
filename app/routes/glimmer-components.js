import Route from '@ember/routing/route';

export default class AngleBracketSyntaxRoute extends Route {

  model(){
    return this.store.find('beer',1);
  }
}
