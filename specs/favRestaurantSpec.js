/* eslint-disable no-undef */
import { favRestModel } from './contract/favRestaurantContract';
import FavoriteRestIdb from '../src/scripts/idb/favorite-idb';

describe('test favorite restaurant contract', () => {
  afterEach(async () => {
    (await FavoriteRestIdb.allData()).forEach(async (restaurantData) => {
      await FavoriteRestIdb.deleteRestauranFromFavorite(restaurantData.id);
    });
  });

  favRestModel(FavoriteRestIdb);
});
