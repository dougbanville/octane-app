import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | glimmer-components/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:glimmer-components/index');
    assert.ok(route);
  });
});
