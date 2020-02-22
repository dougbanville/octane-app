import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({

  name(i){
    return faker.commerce.productName();
  },
  price(){
    return faker.commerce.price();
  },
  image(i){
    return `https://loremflickr.com/g/320/240/beer?random=${i}`
  }
});
