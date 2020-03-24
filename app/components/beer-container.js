import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BeerContainerComponent extends Component {

  @tracked beers
  @tracked searchText

  constructor(){
    super(...arguments)
    this.loadBeers()
  }

  @action
  async loadBeers(){
    const beers = await (await fetch('https://api.punkapi.com/v2/beers')).json();
    if(this.isDestroyed || this.isDestroying) return;
    this.beers = beers;
  }

  filterBeers(){
    if(!this.searchText || this.searchText.length === 0 ) return this.beers;
    return this.beers.filter(r => r.name.toLowerCase().includes(this.searchText.toLowerCase().trim()))
  }

  get beerList(){
    return this.filterBeers();
  }
}