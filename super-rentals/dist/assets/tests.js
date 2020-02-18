'use strict';

define("super-rentals/tests/acceptance/super-rentals-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)("Acceptance | super rentals", function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)("visiting /", async function (assert) {
      /*
        enter key 를 치면 http://localhost:4200/ 를 browser 에 type 한다.
      */
      await (0, _testHelpers.visit)("/");
      assert.equal((0, _testHelpers.currentURL)(), "/");
      assert.dom("nav").exists();
      /* nav-bar */

      assert.dom("h1").hasText("SuperRentals");
      /* nav-bar */

      /* tag h2 를 찾는다.  */

      assert.dom("h2").hasText("Welcome to Super Rentals!");
      /* jumbo class 안에 button link (a.button) 를 찾는다. */

      assert.dom(".jumbo a.button").hasText("About Us");
      await (0, _testHelpers.click)(".jumbo a.button");
      assert.equal((0, _testHelpers.currentURL)(), "/about");
    });
    (0, _qunit.test)("visiting /about", async function (assert) {
      await (0, _testHelpers.visit)("/about");
      assert.equal((0, _testHelpers.currentURL)(), "/about");
      assert.dom("nav").exists();
      /* nav-bar */

      assert.dom("h1").hasText("SuperRentals");
      /* nav-bar */

      assert.dom("h2").hasText("About Super Rentals");
      assert.dom(".jumbo a.button").hasText("Contact Us");
      await (0, _testHelpers.click)(".jumbo a.button");
      assert.equal((0, _testHelpers.currentURL)(), "/getting-in-touch");
    });
    (0, _qunit.test)("visiting /getting-in-touch", async function (assert) {
      await (0, _testHelpers.visit)("/getting-in-touch");
      assert.equal((0, _testHelpers.currentURL)(), "/getting-in-touch");
      assert.dom("nav").exists();
      /* nav-bar */

      assert.dom("h1").hasText("SuperRentals");
      /* nav-bar */

      assert.dom("h2").hasText("Contact Us");
      assert.dom("a.button").hasText("About");
      await (0, _testHelpers.click)(".jumbo a.button");
      assert.equal((0, _testHelpers.currentURL)(), "/about");
    });
    (0, _qunit.test)("navigating using the nav-bar", async function (assert) {
      await (0, _testHelpers.visit)("/");
      assert.dom("nav").exists();
      assert.dom("nav a.menu-index").hasText("SuperRentals");
      assert.dom("nav a.menu-about").hasText("About");
      assert.dom("nav a.menu-contact").hasText("Contact");
      await (0, _testHelpers.click)("nav a.menu-about");
      assert.equal((0, _testHelpers.currentURL)(), "/about");
      await (0, _testHelpers.click)("nav a.menu-contact");
      assert.equal((0, _testHelpers.currentURL)(), "/getting-in-touch");
      await (0, _testHelpers.click)("nav a.menu-index");
      assert.equal((0, _testHelpers.currentURL)(), "/");
    });
  });
});
define("super-rentals/tests/integration/components/jumbo-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)("Integration | Component | jumbo", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders the content inside a jumbo header with a tomster", async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Jumbo>Hello World</Jumbo>
      */
      {
        id: "10C8cDED",
        block: "{\"symbols\":[],\"statements\":[[5,\"jumbo\",[],[[],[]],{\"statements\":[[0,\"Hello World\"]],\"parameters\":[]}]],\"hasEval\":false}",
        meta: {}
      }));
      assert.dom(".jumbo").exists();
      assert.dom(".jumbo").hasText("Hello World");
      assert.dom(".jumbo .tomster").exists();
    });
    /*
      not used
    */

    (0, _qunit.test)("it renders", async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Jumbo />
      */
      {
        id: "CdoKM4LF",
        block: "{\"symbols\":[],\"statements\":[[5,\"jumbo\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ""); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Jumbo>
              template block text
            </Jumbo>
          
      */
      {
        id: "+2VZDJGX",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"jumbo\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), "template block text");
    });
  });
});
define("super-rentals/tests/integration/components/map-test", ["qunit", "ember-qunit", "@ember/test-helpers", "super-rentals/config/environment"], function (_qunit, _emberQunit, _testHelpers, _environment) {
  "use strict";

  (0, _qunit.module)("Integration | Component | map", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders a map image for the specified parameters", async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Map
            @lat="37.7797"
            @lng="-122.4184"
            @zoom="10"
            @width="150"
            @height="120"
          />
      */
      {
        id: "BrVN2tDo",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"map\",[],[[\"@lat\",\"@lng\",\"@zoom\",\"@width\",\"@height\"],[\"37.7797\",\"-122.4184\",\"10\",\"150\",\"120\"]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.dom(".map").exists();
      assert.dom(".map img").hasAttribute("alt", "Map image at coordinates 37.7797,-122.4184");
      assert.dom(".map img").hasAttribute("src", /^https:\/\/api\.mapbox\.com/, 'the src starts with "https://api.mapbox.com"');
      assert.dom(".map img").hasAttribute("width", "150");
      assert.dom(".map img").hasAttribute("height", "120");
      let {
        src
      } = (0, _testHelpers.find)(".map img");
      let token = encodeURIComponent(_environment.default.MAPBOX_ACCESS_TOKEN);
      assert.ok(src.includes("-122.4184,37.7797,10"), "the src should include the lng,lat,zoom parameter");
      assert.ok(src.includes("150x120@2x"), "the src should include the width,height and @2x parameter");
      assert.ok(src.includes(`access_token=${token}`), "the src should include the escaped access token");
    });
    (0, _qunit.test)("it updates the `src` attribute when the arguments change", async function (assert) {
      this.setProperties({
        lat: 37.7749,
        lng: -122.4194,
        zoom: 10,
        width: 150,
        height: 120
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Map
            @lat={{this.lat}}
            @lng={{this.lng}}
            @zoom={{this.zoom}}
            @width={{this.width}}
            @height={{this.height}}
          />
      */
      {
        id: "vKQ5OH/Y",
        block: "{\"symbols\":[],\"statements\":[[5,\"map\",[],[[\"@lat\",\"@lng\",\"@zoom\",\"@width\",\"@height\"],[[23,0,[\"lat\"]],[23,0,[\"lng\"]],[23,0,[\"zoom\"]],[23,0,[\"width\"]],[23,0,[\"height\"]]]]]],\"hasEval\":false}",
        meta: {}
      }));
      let img = (0, _testHelpers.find)(".map img");
      assert.ok(img.src.includes("-122.4194,37.7749,10"), "the src should include the lng,lat,zoom parameter");
      assert.ok(img.src.includes("150x120@2x"), "the src should include the width,height and @2x parameter");
      this.setProperties({
        width: 300,
        height: 200,
        zoom: 12
      });
      assert.ok(img.src.includes("-122.4194,37.7749,12"), "the src should include the lng,lat,zoom parameter");
      assert.ok(img.src.includes("300x200@2x"), "the src should include the width,height and @2x parameter");
      this.setProperties({
        lat: 47.6062,
        lng: -122.3321
      });
      assert.ok(img.src.includes("-122.3321,47.6062"), "the src should include the lng,lat,zoom parameter");
      assert.ok(img.src.includes("300x200@2x"), "the src should include the width,height and @2x parameter");
    });
    (0, _qunit.test)("the default alt attribute can be overridden", async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
          <Map
          @lat="37.7797"
          @lng="-122.4184"
          @zoom="10"
          @width="150"
          @height="120"
          alt="A map of San Francisco"
          />
      */
      {
        id: "zoYkWoUq",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n    \"],[5,\"map\",[[12,\"alt\",\"A map of San Francisco\"]],[[\"@lat\",\"@lng\",\"@zoom\",\"@width\",\"@height\"],[\"37.7797\",\"-122.4184\",\"10\",\"150\",\"120\"]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.dom(".map img").hasAttribute("alt", "A map of San Francisco");
    });
    (0, _qunit.test)("the src, width and height attributes cannot be overridden", async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Map
            @lat="37.7797"
            @lng="-122.4184"
            @zoom="10"
            @width="150"
            @height="120"
            src="/assets/images/teaching-tomster.png"
            width="200"
            height="300"
          />
      */
      {
        id: "h1R+Rhad",
        block: "{\"symbols\":[],\"statements\":[[5,\"map\",[[12,\"src\",\"/assets/images/teaching-tomster.png\"],[12,\"width\",\"200\"],[12,\"height\",\"300\"]],[[\"@lat\",\"@lng\",\"@zoom\",\"@width\",\"@height\"],[\"37.7797\",\"-122.4184\",\"10\",\"150\",\"120\"]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.dom(".map img").hasAttribute("src", /^https:\/\/api\.mapbox\.com/, 'the src starts with "https://api.mapbox.com"');
      assert.dom(".map img").hasAttribute("width", "150");
      assert.dom(".map img").hasAttribute("height", "120");
    });
    /*
    module('Integration | Component | map', function(hooks) {
    setupRenderingTest(hooks);
     test('it renders', async function(assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
       await render(hbs`<Map />`);
       assert.equal(this.element.textContent.trim(), '');
       // Template block usage:
      await render(hbs`
        <Map>
          template block text
        </Map>
      `);
       assert.equal(this.element.textContent.trim(), 'template block text');
    });
     */
  });
});
define("super-rentals/tests/integration/components/nav-bar-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)("Integration | Component | nav-bar", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders", async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <NavBar />
      */
      {
        id: "qq/S826L",
        block: "{\"symbols\":[],\"statements\":[[5,\"nav-bar\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.dom("h1").hasText("SuperRentals");
    });
    /*
      original: not used
    test('it renders', async function(assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
       await render(hbs`<NavBar />`);
       assert.equal(this.element.textContent.trim(), '');
       // Template block usage:
      await render(hbs`
        <NavBar>
          template block text
        </NavBar>
      `);
       assert.equal(this.element.textContent.trim(), 'template block text');
    });
    */
  });
});
define("super-rentals/tests/integration/components/rental-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)("Integration | Component | rental", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders information about a rental property", async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Rental />
      */
      {
        id: "LsA0MtHE",
        block: "{\"symbols\":[],\"statements\":[[5,\"rental\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.dom("article").hasClass("rental");
      assert.dom("article h3").hasText("Grand Old Mansion");
      assert.dom("article .detail.owner").includesText("Veruca Salt");
      assert.dom("article .detail.type").includesText("Standalone");
      assert.dom("article .detail.location").includesText("San Francisco");
      assert.dom("article .detail.bedrooms").includesText("15");
      assert.dom("article .image").exists();
      assert.dom("article .map").exists();
    });
    /*
      original: not used
     test("it renders", async function(assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
       await render(hbs`<Rental />`);
       assert.equal(this.element.textContent.trim(), "");
       // Template block usage:
      await render(hbs`
        <Rental>
          template block text
        </Rental>
      `);
       assert.equal(this.element.textContent.trim(), "template block text");
    });
     */
  });
});
define("super-rentals/tests/integration/components/rental/image-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)("Integration | Component | rental/image", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders the given image", async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Rental::Image
              src="/assets/images/teaching-tomster.png"
              alt="Teaching Tomster"
            />
          
      */
      {
        id: "d4/XUZdv",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"rental/image\",[[12,\"src\",\"/assets/images/teaching-tomster.png\"],[12,\"alt\",\"Teaching Tomster\"]],[[],[]]],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.dom(".image").exists();
      assert.dom(".image img").hasAttribute("src", "/assets/images/teaching-tomster.png");
      assert.dom(".image img").hasAttribute("alt", "Teaching Tomster");
    });
    (0, _qunit.test)("clicking on  the component toggles its size", async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Rental::Image 
              arc="/assets/teaching-tomster.png"
              alt="Teaching Tomster"
            />
          
      */
      {
        id: "EOV7J7b1",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"rental/image\",[[12,\"arc\",\"/assets/teaching-tomster.png\"],[12,\"alt\",\"Teaching Tomster\"]],[[],[]]],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.dom("button.image").exists();
      assert.dom(".image").doesNotHaveClass("large");
      assert.dom(".image small").hasText("View Larger");
      await (0, _testHelpers.click)("button.image");
      assert.dom(".image").hasClass("large");
      assert.dom(".image small").hasText("View Smaller");
      await (0, _testHelpers.click)("button.image");
      assert.dom(".image").doesNotHaveClass("large");
      assert.dom(".image small").hasText("View Larger");
    });
    /* 
      original not used 
    test('it renders', async function(assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
       await render(hbs`<Rental::Image />`);
       assert.equal(this.element.textContent.trim(), '');
       // Template block usage:
      await render(hbs`
        <Rental::Image>
          template block text
        </Rental::Image>
      `);
       assert.equal(this.element.textContent.trim(), 'template block text');
    });
     */
  });
});
define("super-rentals/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/map.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/map.js should pass ESLint\n\n');
  });
  QUnit.test('components/rental/image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/rental/image.js should pass ESLint\n\n');
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
});
define("super-rentals/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('super-rentals/templates/about.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'super-rentals/templates/about.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('super-rentals/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'super-rentals/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('super-rentals/templates/contact.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'super-rentals/templates/contact.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('super-rentals/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'super-rentals/templates/index.hbs should pass TemplateLint.\n\n');
  });
});
define("super-rentals/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/super-rentals-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/super-rentals-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/jumbo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/jumbo-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/map-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/map-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nav-bar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nav-bar-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/rental-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/rental-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/rental/image-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/rental/image-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass ESLint\n\n');
  });
});
define("super-rentals/tests/test-helper", ["super-rentals/app", "super-rentals/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
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
define('super-rentals/config/environment', [], function() {
  var prefix = 'super-rentals';
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

require('super-rentals/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
