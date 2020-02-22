import Route from '@ember/routing/route';

export default class GlimmerComponentsIndexRoute extends Route {

  model(){
    return this.store.find('beer',1);
  }
}
