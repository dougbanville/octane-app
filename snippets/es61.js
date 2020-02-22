import Component from "@ember/component";

export default Component.extend({
  init() {
    this._super(...arguments);

    this.filter("").then(results => {
      return this.set("results", results);
    });
  }
});
