import { module, test } from "qunit";
import { click, visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | super rentals", function(hooks) {
  setupApplicationTest(hooks);

  test("visiting /", async function(assert) {
    /*
      enter key 를 치면 http://localhost:4200/ 를 browser 에 type 한다.
    */
    await visit("/");

    assert.equal(currentURL(), "/");

    assert.dom("h2").hasText("Welcome to Super Rentals!");
    /*
      jombo class 안에 button link (a.button) 를 찾는다.
    */
    assert.dom(".jumbo a.button").hasText("About Us");
    await click(".jumbo a.button");

    assert.equal(currentURL(), "/about");
  });

  test("visiting /about", async function(assert) {
    await visit("/about");

    assert.equal(currentURL(), "/about");
    assert.dom("h2").hasText("About Super Rentals");

    assert.dom(".jumbo a.button").hasText("Contact Us");
    await click(".jumbo a.button");

    assert.equal(currentURL(), "/getting-in-touch");
  });

  test("visiting /getting-in-touch", async function(assert) {
    await visit("/getting-in-touch");

    assert.equal(currentURL(), "/getting-in-touch");
    assert.dom("h2").hasText("Contact Us");

    assert.dom("a.button").hasText("About");
    await click(".jumbo a.button");

    assert.equal(currentURL(), "/about");
  });
});
