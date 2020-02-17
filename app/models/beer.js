import Model, { attr } from '@ember-data/model';

export default class BeerModel extends Model {

  @attr('string') name;
  @attr('string') description;
  @attr('number') abv;
  @attr('number') price;
  @attr('string') image;
  get flickerImage(){
    return this.image.replace('lorempixel.com', 'loremflickr.com')
  }


}
