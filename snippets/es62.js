import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class FilterComponent extends Component {
  @tracked results;

  constructor() {
    super(...arguments);

    this.args.filter("").then(results => {
      this.results = results;
    });
  }
}
