'use strict';

define("ember-quickstart/tests/integration/components/people-list-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | people-list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <PeopleList />
      */
      {
        id: "N4pccOoS",
        block: "{\"symbols\":[],\"statements\":[[5,\"people-list\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <PeopleList>
              template block text
            </PeopleList>
          
      */
      {
        id: "IaSvj3jH",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"people-list\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-quickstart/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/bb.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/bb.js should pass ESLint\n\n');
  });
  QUnit.test('components/people-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/people-list.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/scientists.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/scientists.js should pass ESLint\n\n');
  });
});
define("ember-quickstart/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('ember-quickstart/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-quickstart/templates/application.hbs should pass TemplateLint.\n\nember-quickstart/templates/application.hbs\n  2:0  error  HTML comment detected  no-html-comments\n');
  });
  QUnit.test('ember-quickstart/templates/scientists.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-quickstart/templates/scientists.hbs should pass TemplateLint.\n\nember-quickstart/templates/scientists.hbs\n  1:0  error  HTML comment detected  no-html-comments\n');
  });
});
define("ember-quickstart/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/people-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/people-list-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/scientists-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/scientists-test.js should pass ESLint\n\n');
  });
});
define("ember-quickstart/tests/test-helper", ["ember-quickstart/app", "ember-quickstart/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("ember-quickstart/tests/unit/routes/scientists-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | scientists', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:scientists');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/config/environment', [], function() {
  var prefix = 'ember-quickstart';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-quickstart/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
