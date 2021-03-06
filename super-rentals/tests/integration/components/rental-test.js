import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | rental", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders information about a rental property", async function(assert) {
    await render(hbs`<Rental />`);

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
