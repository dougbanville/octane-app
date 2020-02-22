import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | es6classes', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:es6classes');
    assert.ok(route);
  });
});
