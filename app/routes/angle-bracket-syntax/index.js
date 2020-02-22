import Route from '@ember/routing/route';

export default class AngleBracketSyntaxIndexRoute extends Route {

  model(){
    return this.store.find('beer',1);
  }
}
