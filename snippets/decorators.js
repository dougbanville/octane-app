//
const beerStrength = function(){
  target.abv = '4.5%';
}
@beerStrength
class Beer{}

console.log(Beer.abv);//4.5%