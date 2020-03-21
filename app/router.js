import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('glimmer-components', function() {
    this.route('nested');
  });
  this.route('es6classes');
  this.route('modifier');
  this.route('angle-bracket');
  this.route('beerDetail', {
    path: '/:id'
  });
});
