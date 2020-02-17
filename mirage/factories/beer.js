import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({

  name(i){
    return faker.commerce.productName();
  },
  price(){
    return faker.commerce.price();
  },
  image(){
    return `https://loremflickr.com/320/240/beer`
  }
});
