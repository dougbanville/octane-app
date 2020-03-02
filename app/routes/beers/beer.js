import Route from '@ember/routing/route';

export default class BeersBeerRoute extends Route {

  async model({id}){
    const beer = await (await fetch(`https://api.punkapi.com/v2/beers/${id}`)).json();
    return beer[0];
  }
}
