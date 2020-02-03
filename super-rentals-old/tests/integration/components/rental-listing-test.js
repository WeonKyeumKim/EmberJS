import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | rental-listing', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    //* this.rental 에 fake data 를 set 한다.
    //* this.rental = {

    //* replace JS array with EmberObject
      this.rental = EmberObject.create({
      image: 'fake.png',
      title: 'test-title',
      owner: 'test-owner',
      type: 'test-type',
      city: 'test-city',
      bedrooms: 3
      });
    //* };
  });

  //* render function 에서 Angle bracket invocation syntax 를 사용한다.
  //* component name: site-header
  //* Classic invocation syntax:
  //*    {{site-header user=this.user class=(if this.user.isAdmin "admin")}}
  //*
  //* Angle bracket invocation syntax:
  //*    <SiteHeader @user={{this.user}} @class={{if this.user.isAdmin "admin"}} />

  test('should display rental details', async function(assert) {
    //* render function 은 template string 을 pass 하게 한다.
    await render(hbs `<RentalListing @rental={{this.rental}} />`);
    //*
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
    assert.equal(this.element.querySelector('.listing h3').textContent.trim(), 'test-title');
    //* trim() removes space between Owner: and test-owner */
    //*   <div class="detail owner">
    //*     <span>Owner:</span>{{rental.owner}}
    //*   </div>
    assert.equal(this.element.querySelector('.listing .owner').textContent.trim(), 'Owner:test-owner');
  });

  test('should toggle wide class on click', async function(assert) {
    await render(hbs `<RentalListing @rental={{this.rental}} />`);
    //* 처음에는 wide class 없이 render 하는지 assert 할 것이다.
    //* clicking 한 후에 second time 에는 wide class 를 add 한다.

    //* component's class image 이고 wide class 를 찾는다.
    assert.notOk(this.element.querySelector('.image.wide'), 'initially rendered small');
    await click('.image');
    assert.ok(this.element.querySelector('.image.wide'), 'rendered wide after click');
    await click('.image');
    assert.notOk(this.element.querySelector('.image.wide'), 'rendered small after second click');
  });

});
