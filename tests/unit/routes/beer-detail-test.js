import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | beer-detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:beer-detail');
    assert.ok(route);
  });
});
