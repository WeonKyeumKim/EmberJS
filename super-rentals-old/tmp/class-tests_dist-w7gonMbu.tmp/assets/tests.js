'use strict';

define("super-rentals/tests/acceptance/list-rentals-test", ["qunit", "@ember/test-helpers", "ember-qunit", "ember-cli-mirage/test-support/setup-mirage"], function (_qunit, _testHelpers, _emberQunit, _setupMirage) {
  "use strict";

  // Mirage
  (0, _qunit.module)('Acceptance | list rentals', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _setupMirage.default)(hooks); // Mirage

    (0, _qunit.test)('should show rentals as the home page', async function (assert) {
      await (0, _testHelpers.visit)("/");
      assert.equal((0, _testHelpers.currentURL)(), '/rentals', 'should redirect automatically');
    });
    (0, _qunit.test)('should link to information about the company.', async function (assert) {
      await (0, _testHelpers.visit)("/");
      await (0, _testHelpers.click)(".menu-about");
      assert.equal((0, _testHelpers.currentURL)(), '/about', 'should navigate to about');
    });
    (0, _qunit.test)('should link to contact information.', async function (assert) {
      await (0, _testHelpers.visit)("/contact");
      await (0, _testHelpers.click)(".menu-contact");
      assert.equal((0, _testHelpers.currentURL)(), '/contact', 'should navigate to contact');
    });
    (0, _qunit.test)('should list available rentals', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
    });
    (0, _qunit.test)('should filter the list of rentals by city.', async function (assert) {});
    (0, _qunit.test)('should show details for a selected rental', async function (assert) {});
  });
});
define("super-rentals/tests/integration/components/list-filter-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | list-filter', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "05pehUAG",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"list-filter\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "wCktFOTV",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"list-filter\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("super-rentals/tests/integration/components/rental-listing-test-init", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | rental-listing', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "QMpYuvMi",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"rental-listing\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ek0A5Tc3",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"rental-listing\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("super-rentals/tests/integration/components/rental-listing-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | rental-listing', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      //* this.rental 에 fake data 를 set 한다.
      //* this.rental = {
      //* replace JS array with EmberObject
      this.rental = Ember.Object.create({
        image: 'fake.png',
        title: 'test-title',
        owner: 'test-owner',
        type: 'test-type',
        city: 'test-city',
        bedrooms: 3
      }); //* };
    }); //* render function 에서 Angle bracket invocation syntax 를 사용한다.
    //* component name: site-header
    //* Classic invocation syntax:
    //*    {{site-header user=this.user class=(if this.user.isAdmin "admin")}}
    //*
    //* Angle bracket invocation syntax:
    //*    <SiteHeader @user={{this.user}} @class={{if this.user.isAdmin "admin"}} />

    (0, _qunit.test)('should display rental details', async function (assert) {
      //* render function 은 template string 을 pass 하게 한다.
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "auJAvGeR",
        "block": "{\"symbols\":[],\"statements\":[[5,\"rental-listing\",[],[[\"@rental\"],[[22,0,[\"rental\"]]]]]],\"hasEval\":false}",
        "meta": {}
      })); //*
      //* component's class listing 이고 h3 tag 를 찾는다.
      //* component's class listing 이고 owner class 를 찾는다.
      //* <article class="listing">
      //*     <h3>{{rental.title}}</h3>
      //*     <div class="detail owner">
      //*
      //* assert.equal(this.element.querySelector('.listing h3').textContent.trim(), 'test-title', 'Title: test-title');
      //* assert.equal(this.element.querySelector('.listing .owner').textContent.trim(), 'Owner: test-owner', 'Owner: test-owner');
      //* expected result from querySelector is 'test-title' */
      //*   <h3>{{rental.title}}</h3>

      assert.equal(this.element.querySelector('.listing h3').textContent.trim(), 'test-title'); //* trim() removes space between Owner: and test-owner */
      //*   <div class="detail owner">
      //*     <span>Owner:</span>{{rental.owner}}
      //*   </div>

      assert.equal(this.element.querySelector('.listing .owner').textContent.trim(), 'Owner:test-owner');
    });
    (0, _qunit.test)('should toggle wide class on click', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "auJAvGeR",
        "block": "{\"symbols\":[],\"statements\":[[5,\"rental-listing\",[],[[\"@rental\"],[[22,0,[\"rental\"]]]]]],\"hasEval\":false}",
        "meta": {}
      })); //* 처음에는 wide class 없이 render 하는지 assert 할 것이다.
      //* clicking 한 후에 second time 에는 wide class 를 add 한다.
      //* component's class image 이고 wide class 를 찾는다.

      assert.notOk(this.element.querySelector('.image.wide'), 'initially rendered small');
      await (0, _testHelpers.click)('.image');
      assert.ok(this.element.querySelector('.image.wide'), 'rendered wide after click');
      await (0, _testHelpers.click)('.image');
      assert.notOk(this.element.querySelector('.image.wide'), 'rendered small after second click');
    });
  });
});
define("super-rentals/tests/integration/helpers/rental-property-type-test-init", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | rental-property-type', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "PyyJ9viP",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"rental-property-type\",[[23,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define("super-rentals/tests/integration/helpers/rental-property-type-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | rental-property-type', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders correctly for a Standalone rental', async function (assert) {
      this.set('inputValue', 'Estate');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "PyyJ9viP",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"rental-property-type\",[[23,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'Standalone');
    });
    (0, _qunit.test)('it renders correctly for a Community rental', async function (assert) {
      this.set('inputValue', 'Apartment');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "PyyJ9viP",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"rental-property-type\",[[23,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'Community');
    });
  });
});
define("super-rentals/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/list-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/list-filter.js should pass ESLint\n\n');
  });
  QUnit.test('components/rental-listing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/rental-listing.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/rentals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/rentals.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/rental-property-type-init.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/rental-property-type-init.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/rental-property-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/rental-property-type.js should pass ESLint\n\n');
  });
  QUnit.test('models/fish.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/fish.js should pass ESLint\n\n');
  });
  QUnit.test('models/rental.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/rental.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint\n\n');
  });
  QUnit.test('routes/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/rentals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rentals.js should pass ESLint\n\n');
  });
  QUnit.test('routes/rentals_JSarrayModel.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rentals_JSarrayModel.js should pass ESLint\n\n');
  });
});
define("super-rentals/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('super-rentals/templates/about.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'super-rentals/templates/about.hbs should pass TemplateLint.\n\nsuper-rentals/templates/about.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<h2>` beginning at L3:C4. Expected `<h2>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:4  error  Incorrect indentation for `<p>` beginning at L4:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  9:4  error  Incorrect indentation for `{{#link-to}}` beginning at L9:C4. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:7  error  Incorrect indentation for `\n    The Super Rentals website is a delightful project created to explore Ember.\n    By building a property rental site, we can simultaneously imagine traveling\n    AND building Ember applications.\n    ` beginning at L4:C7. Expected `\n    The Super Rentals website is a delightful project created to explore Ember.\n    By building a property rental site, we can simultaneously imagine traveling\n    AND building Ember applications.\n    ` to be at an indentation of 6 but was found at 4.  block-indentation\n  10:0  error  Incorrect indentation for `        Contact Us\n` beginning at L10:C0. Expected `        Contact Us\n` to be at an indentation of 6 but was found at 8.  block-indentation\n');
  });
  QUnit.test('super-rentals/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'super-rentals/templates/application.hbs should pass TemplateLint.\n\nsuper-rentals/templates/application.hbs\n  5:4  error  Incorrect indentation for `<div>` beginning at L5:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  18:4  error  Incorrect indentation for `<div>` beginning at L18:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:8  error  Incorrect indentation for `{{#link-to}}` beginning at L6:C8. Expected `{{#link-to}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  9:8  error  Incorrect indentation for `<div>` beginning at L9:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  7:12  error  Incorrect indentation for `<h1>` beginning at L7:C12. Expected `<h1>` to be at an indentation of 10 but was found at 12.  block-indentation\n  10:12  error  Incorrect indentation for `{{#link-to}}` beginning at L10:C12. Expected `{{#link-to}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  13:12  error  Incorrect indentation for `{{#link-to}}` beginning at L13:C12. Expected `{{#link-to}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  11:0  error  Incorrect indentation for `                About\n` beginning at L11:C0. Expected `                About\n` to be at an indentation of 14 but was found at 16.  block-indentation\n  14:0  error  Incorrect indentation for `                Contact\n` beginning at L14:C0. Expected `                Contact\n` to be at an indentation of 14 but was found at 16.  block-indentation\n  19:8  error  Incorrect indentation for `{{! receive route data }}` beginning at L19:C8. Expected `{{! receive route data }}` to be at an indentation of 6 but was found at 8.  block-indentation\n  20:8  error  Incorrect indentation for `{{outlet}}` beginning at L20:C8. Expected `{{outlet}}` to be at an indentation of 6 but was found at 8.  block-indentation\n');
  });
  QUnit.test('super-rentals/templates/components/list-filter.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'super-rentals/templates/components/list-filter.hbs should pass TemplateLint.\n\nsuper-rentals/templates/components/list-filter.hbs\n  17:7  error  you must use double quotes in templates  quotes\n  18:17  error  you must use double quotes in templates  quotes\n  19:14  error  you must use double quotes in templates  quotes\n  20:9  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('super-rentals/templates/components/rental-listing.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'super-rentals/templates/components/rental-listing.hbs should pass TemplateLint.\n\nsuper-rentals/templates/components/rental-listing.hbs\n  2:0  error  Incorrect indentation for `<!--\n    name \uC5D0 \uBC18\uB4DC\uC2DC \'-\' \uB97C \uC0AC\uC6A9\uD574\uC57C \uD55C\uB2E4.  \n    to show larger image, \n        set class name to wide when isWide is true\n        anchor element \uB85C image \uC640 text \uB97C \uAC19\uC774 wrap \uD55C\uB2E4.\n            <a class="image wide" role="button"> \n        initial:\n            <a class="image" role="button">\n\n    {{action}} helper \uB294 element \uB97C click \uD558\uBA74,\n        click events \uB97C listen \uD558\uACE0,\n        action \uC744 trigger \uD55C\uB2E4.\n        on option \uB3C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4.\n    {{action "helperName" arguments on="mouseUp"}}\n\n    components/rental-listing.js\n        actions: {\n            toggleImageSize\n        }\n-->` beginning at L2:C0. Expected `<!--\n    name \uC5D0 \uBC18\uB4DC\uC2DC \'-\' \uB97C \uC0AC\uC6A9\uD574\uC57C \uD55C\uB2E4.  \n    to show larger image, \n        set class name to wide when isWide is true\n        anchor element \uB85C image \uC640 text \uB97C \uAC19\uC774 wrap \uD55C\uB2E4.\n            <a class="image wide" role="button"> \n        initial:\n            <a class="image" role="button">\n\n    {{action}} helper \uB294 element \uB97C click \uD558\uBA74,\n        click events \uB97C listen \uD558\uACE0,\n        action \uC744 trigger \uD55C\uB2E4.\n        on option \uB3C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4.\n    {{action "helperName" arguments on="mouseUp"}}\n\n    components/rental-listing.js\n        actions: {\n            toggleImageSize\n        }\n-->` to be at an indentation of 2 but was found at 0.  block-indentation\n  22:4  error  Incorrect indentation for `<a>` beginning at L22:C4. Expected `<a>` to be at an indentation of 2 but was found at 4.  block-indentation\n  26:4  error  Incorrect indentation for `<div>` beginning at L26:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  23:8  error  Incorrect indentation for `<img>` beginning at L23:C8. Expected `<img>` to be at an indentation of 6 but was found at 8.  block-indentation\n  24:8  error  Incorrect indentation for `<small>` beginning at L24:C8. Expected `<small>` to be at an indentation of 6 but was found at 8.  block-indentation\n  27:8  error  Incorrect indentation for `<h3>` beginning at L27:C8. Expected `<h3>` to be at an indentation of 6 but was found at 8.  block-indentation\n  28:8  error  Incorrect indentation for `<!-- \n            class="detail owner" \uB97C \uD558\uBA74 CSS \uC5D0\uC11C \n            .detail \uC744 \uBAA8\uB450 \uC801\uC6A9\uD55C \uD6C4\uC5D0 .owner \uC5D0 \uB300\uD55C \uAC83\uC744 override \uD55C\uB2E4.\n        -->` beginning at L28:C8. Expected `<!-- \n            class="detail owner" \uB97C \uD558\uBA74 CSS \uC5D0\uC11C \n            .detail \uC744 \uBAA8\uB450 \uC801\uC6A9\uD55C \uD6C4\uC5D0 .owner \uC5D0 \uB300\uD55C \uAC83\uC744 override \uD55C\uB2E4.\n        -->` to be at an indentation of 6 but was found at 8.  block-indentation\n  32:8  error  Incorrect indentation for `<div>` beginning at L32:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  35:8  error  Incorrect indentation for `<div>` beginning at L35:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  50:8  error  Incorrect indentation for `<div>` beginning at L50:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  53:8  error  Incorrect indentation for `<div>` beginning at L53:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  33:12  error  Incorrect indentation for `<span>` beginning at L33:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  36:12  error  Incorrect indentation for `<!--\n                helper rental-property-type \uC5D0 this.rental.category \uB97C pass \uD558\uC5EC\n                rentalPropertyType \uC744 return \uD55C\uB2E4. \n                display format: rentalPropertyType \'-\' category\n\n                call\n                    templates/components/rental-listing.hbs\n                    {{rental-property-type this.rental.category}} - {{this.rental.category}}\n                receive\n                    helpers//rental-property-type.js\n                    rentalPropertyType([propertyType])\n            -->` beginning at L36:C12. Expected `<!--\n                helper rental-property-type \uC5D0 this.rental.category \uB97C pass \uD558\uC5EC\n                rentalPropertyType \uC744 return \uD55C\uB2E4. \n                display format: rentalPropertyType \'-\' category\n\n                call\n                    templates/components/rental-listing.hbs\n                    {{rental-property-type this.rental.category}} - {{this.rental.category}}\n                receive\n                    helpers//rental-property-type.js\n                    rentalPropertyType([propertyType])\n            -->` to be at an indentation of 10 but was found at 12.  block-indentation\n  48:12  error  Incorrect indentation for `<span>` beginning at L48:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  51:12  error  Incorrect indentation for `<span>` beginning at L51:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  54:12  error  Incorrect indentation for `<span>` beginning at L54:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  2:0  error  HTML comment detected  no-html-comments\n  28:8  error  HTML comment detected  no-html-comments\n  36:12  error  HTML comment detected  no-html-comments\n  23:8  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
  QUnit.test('super-rentals/templates/contact.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'super-rentals/templates/contact.hbs should pass TemplateLint.\n\nsuper-rentals/templates/contact.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<h2>` beginning at L3:C4. Expected `<h2>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:4  error  Incorrect indentation for `<p>` beginning at L4:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  8:4  error  Incorrect indentation for `<address>` beginning at L8:C4. Expected `<address>` to be at an indentation of 2 but was found at 4.  block-indentation\n  17:4  error  Incorrect indentation for `{{#link-to}}` beginning at L17:C4. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:7  error  Incorrect indentation for `\n        Super Rentals Representatives would love to help you` beginning at L4:C7. Expected `\n        Super Rentals Representatives would love to help you` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:13  error  Incorrect indentation for `\n        Super Rentals HQ\n        ` beginning at L8:C13. Expected `\n        Super Rentals HQ\n        ` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:8  error  Incorrect indentation for `<p>` beginning at L10:C8. Expected `<p>` to be at an indentation of 6 but was found at 8.  block-indentation\n  14:8  error  Incorrect indentation for `<a>` beginning at L14:C8. Expected `<a>` to be at an indentation of 6 but was found at 8.  block-indentation\n  15:8  error  Incorrect indentation for `<a>` beginning at L15:C8. Expected `<a>` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:11  error  Incorrect indentation for `\n            1212 Test Address Avenue` beginning at L10:C11. Expected `\n            1212 Test Address Avenue` to be at an indentation of 10 but was found at 12.  block-indentation\n  18:0  error  Incorrect indentation for `        About\n` beginning at L18:C0. Expected `        About\n` to be at an indentation of 6 but was found at 8.  block-indentation\n');
  });
  QUnit.test('super-rentals/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'super-rentals/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('super-rentals/templates/rentals-beforeComponent.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'super-rentals/templates/rentals-beforeComponent.hbs should pass TemplateLint.\n\nsuper-rentals/templates/rentals-beforeComponent.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<h2>` beginning at L3:C4. Expected `<h2>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:4  error  Incorrect indentation for `<p>` beginning at L4:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:4  error  Incorrect indentation for `{{#link-to}}` beginning at L5:C4. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:0  error  Incorrect indentation for `        About\n` beginning at L6:C0. Expected `        About\n` to be at an indentation of 6 but was found at 8.  block-indentation\n  15:4  error  Incorrect indentation for `<article>` beginning at L15:C4. Expected `<article>` to be at an indentation of 2 but was found at 4.  block-indentation\n  16:8  error  Incorrect indentation for `<div>` beginning at L16:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  17:12  error  Incorrect indentation for `<h3>` beginning at L17:C12. Expected `<h3>` to be at an indentation of 10 but was found at 12.  block-indentation\n  18:12  error  Incorrect indentation for `<div>` beginning at L18:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  21:12  error  Incorrect indentation for `<div>` beginning at L21:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  24:12  error  Incorrect indentation for `<div>` beginning at L24:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  27:12  error  Incorrect indentation for `<div>` beginning at L27:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  19:16  error  Incorrect indentation for `<span>` beginning at L19:C16. Expected `<span>` to be at an indentation of 14 but was found at 16.  block-indentation\n  22:16  error  Incorrect indentation for `<span>` beginning at L22:C16. Expected `<span>` to be at an indentation of 14 but was found at 16.  block-indentation\n  25:16  error  Incorrect indentation for `<span>` beginning at L25:C16. Expected `<span>` to be at an indentation of 14 but was found at 16.  block-indentation\n  28:16  error  Incorrect indentation for `<span>` beginning at L28:C16. Expected `<span>` to be at an indentation of 14 but was found at 16.  block-indentation\n  10:0  error  HTML comment detected  no-html-comments\n');
  });
  QUnit.test('super-rentals/templates/rentals-rentalListingComponent.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'super-rentals/templates/rentals-rentalListingComponent.hbs should pass TemplateLint.\n\nsuper-rentals/templates/rentals-rentalListingComponent.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<h2>` beginning at L3:C4. Expected `<h2>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:4  error  Incorrect indentation for `<p>` beginning at L4:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:4  error  Incorrect indentation for `{{#link-to}}` beginning at L5:C4. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:0  error  Incorrect indentation for `        About\n` beginning at L6:C0. Expected `        About\n` to be at an indentation of 6 but was found at 8.  block-indentation\n  11:4  error  Incorrect indentation for `{{! \n        component name: site-header\n            Classic invocation syntax:\n                {{site-header user=this.user class=(if this.user.isAdmin "admin")}}\n\n            Angle bracket invocation syntax:\n                <SiteHeader @user={{this.user}} @class={{if this.user.isAdmin "admin"}} />\n        HTML attributes\n            Classic invocation syntax:\n                {{#super-select selected=this.user.country as |s|}}\n                    {{#each this.availableCountries as |country|}}\n                        {{#s.option value=country}}{{country.name}}{{/s.option}}\n                    {{/each}}\n                {{/super-select}}\n            Angle bracket invocation syntax:\n                <SuperSelect @selected={{this.user.country}} as |s|>\n                    {{#each this.availableCountries as |country|}}\n                        <s.option @value={{country}}>{{country.name}}</s.option>\n                    {{/each}}\n                </SuperSelect>        \n    }}` beginning at L11:C4. Expected `{{! \n        component name: site-header\n            Classic invocation syntax:\n                {{site-header user=this.user class=(if this.user.isAdmin "admin")}}\n\n            Angle bracket invocation syntax:\n                <SiteHeader @user={{this.user}} @class={{if this.user.isAdmin "admin"}} />\n        HTML attributes\n            Classic invocation syntax:\n                {{#super-select selected=this.user.country as |s|}}\n                    {{#each this.availableCountries as |country|}}\n                        {{#s.option value=country}}{{country.name}}{{/s.option}}\n                    {{/each}}\n                {{/super-select}}\n            Angle bracket invocation syntax:\n                <SuperSelect @selected={{this.user.country}} as |s|>\n                    {{#each this.availableCountries as |country|}}\n                        <s.option @value={{country}}>{{country.name}}</s.option>\n                    {{/each}}\n                </SuperSelect>        \n    }}` to be at an indentation of 2 but was found at 4.  block-indentation\n  32:4  error  Incorrect indentation for `<RentalListing>` beginning at L32:C4. Expected `<RentalListing>` to be at an indentation of 2 but was found at 4.  block-indentation\n');
  });
  QUnit.test('super-rentals/templates/rentals.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'super-rentals/templates/rentals.hbs should pass TemplateLint.\n\nsuper-rentals/templates/rentals.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<h2>` beginning at L3:C4. Expected `<h2>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:4  error  Incorrect indentation for `<p>` beginning at L4:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:4  error  Incorrect indentation for `{{#link-to}}` beginning at L5:C4. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:0  error  Incorrect indentation for `        About\n` beginning at L6:C0. Expected `        About\n` to be at an indentation of 6 but was found at 8.  block-indentation\n  44:4  error  Incorrect indentation for `<ul>` beginning at L44:C4. Expected `<ul>` to be at an indentation of 2 but was found at 4.  block-indentation\n  45:8  error  Incorrect indentation for `{{!\n            before list-filter: {{#each model as |rentalUnit|}}\n            after list-filer: filteredResults \uB77C\uB294 variable \uB85C\uC368 inner markup \uC73C\uB85C\n            our filter data \uB97C passing, yielding \uD55C\uB2E4.   \n        }}` beginning at L45:C8. Expected `{{!\n            before list-filter: {{#each model as |rentalUnit|}}\n            after list-filer: filteredResults \uB77C\uB294 variable \uB85C\uC368 inner markup \uC73C\uB85C\n            our filter data \uB97C passing, yielding \uD55C\uB2E4.   \n        }}` to be at an indentation of 6 but was found at 8.  block-indentation\n  50:8  error  Incorrect indentation for `{{#each}}` beginning at L50:C8. Expected `{{#each}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  51:12  error  Incorrect indentation for `<li>` beginning at L51:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n');
  });
});
define("super-rentals/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/list-rentals-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'acceptance/list-rentals-test.js should pass ESLint\n\n32:70 - \'assert\' is defined but never used. (no-unused-vars)\n35:69 - \'assert\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('integration/components/list-filter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-filter-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/rental-listing-test-init.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/rental-listing-test-init.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/rental-listing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/rental-listing-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/helpers/rental-property-type-test-init.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/rental-property-type-test-init.js should pass ESLint\n\n');
  });
  QUnit.test('integration/helpers/rental-property-type-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/rental-property-type-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/rentals-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/rentals-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/fish-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/fish-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/rental-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/rental-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/fish-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/fish-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/rentals-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rentals-test.js should pass ESLint\n\n');
  });
});
define("super-rentals/tests/test-helper", ["super-rentals/app", "super-rentals/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("super-rentals/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("super-rentals/tests/unit/controllers/rentals-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | rentals', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:rentals');
      assert.ok(controller);
    });
  });
});
define("super-rentals/tests/unit/models/fish-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | fish', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('fish', {});
      assert.ok(model);
    });
  });
});
define("super-rentals/tests/unit/models/rental-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | rental', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('rental', {});
      assert.ok(model);
    });
  });
});
define("super-rentals/tests/unit/routes/about-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define("super-rentals/tests/unit/routes/contact-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact');
      assert.ok(route);
    });
  });
});
define("super-rentals/tests/unit/routes/fish-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | fish', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:fish');
      assert.ok(route);
    });
  });
});
define("super-rentals/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("super-rentals/tests/unit/routes/rentals-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | rentals', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:rentals');
      assert.ok(route);
    });
  });
});
define('super-rentals/config/environment', [], function() {
  var prefix = 'super-rentals';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('super-rentals/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
