import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | glimmer-components/nested', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:glimmer-components/nested');
    assert.ok(route);
  });
});
