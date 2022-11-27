/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Movies');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
// tes 1
Scenario('showing empty liked restaurant (tes pertama)', ({ I }) => {
  I.seeElement('#contentFavorite');
  I.see('Tidak ada restaurant yang telah disukai', '.movie-item_not_found');
});

// tes 2
Scenario('like one movie (tes kedua)', async ({ I }) => {
  I.see('Tidak ada restaurant yang telah disukai', '.movie-item_not_found');
  I.amOnPage('/#/');

  I.wait(3);
  I.seeElement('#restaurantTitle a');
  const firstRestaurant = locate('#restaurantTitle a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.wait(3);
  I.seeElement('#likeButton');
  I.wait(3);
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('#contentFavorite');
  const likedRestaurantTitle = await I.grabTextFrom('#restaurantTitle');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
// tes 3
Scenario('Unlike restaurant', ({ I }) => {
// showing restaurant liked
  I.amOnPage('/#/');
  I.wait(3);
  I.seeElement('#restaurantTitle a');
  const firstRestaurant = locate('#restaurantTitle a').first();
  I.click(firstRestaurant);

  I.wait(3);
  I.seeElement('#likeButton');
  I.wait(3);
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.dontSeeElement('#noFavoriteData');
  I.seeElement('.data');

  // unlike restaurant
  I.seeElement('#restaurantTitle a');
  I.click(firstRestaurant);

  I.wait(3);
  I.seeElement('#likeButton');
  I.wait(3);
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('#noFavoriteData');
  I.see('Tidak ada restaurant yang telah disukai', '.movie-item_not_found');
});
