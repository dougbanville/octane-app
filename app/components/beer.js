import Component from '@glimmer/component';

export default class BeerComponent extends Component {

  bgImage = el=>{
    el.setAttribute("style", `background-image: url('${this.args.beer.image_url}');`);
  }
}
