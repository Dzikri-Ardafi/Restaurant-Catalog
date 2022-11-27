/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import { favRestModel } from './contract/favRestaurantContract';

let favoriteRestaurant = [];

const favoriteRestaurantArr = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return (favoriteRestaurant.find((restaurant) => restaurant.id === id));
  },

  allData() {
    return favoriteRestaurant;
  },

  putRestauranToFavorite(_restaurant) {
    if (!_restaurant('id')) {
      return;
    }
    // memastikan id ini belum masuk ke favorite
    if (this.getRestaurant(_restaurant.id)) {
      return;
    }
    favoriteRestaurant.push(_restaurant);
  },

  deleteRestauranFromFavorite(id) {
    favoriteRestaurant = favoriteRestaurant.filter((_restaurant) => _restaurant.id !== id);
  },
};

describe('favorite restaurant array tes', () => {
  afterEach(() => favoriteRestaurant = []);

  favRestModel(favoriteRestaurantArr);
});
