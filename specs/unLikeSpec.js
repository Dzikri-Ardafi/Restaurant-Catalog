// INTEGRATION TESTING
/* eslint-disable no-undef */
import FavoriteRestIdb from '../src/scripts/idb/favorite-idb';
import * as TestFactories from './helper/tesFactory';

describe('Unlike A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  // mengambil id untuk di tes
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestIdb.putRestauranToFavorite({ id: 'w9pga3s2tubkfw1e867' });
  });
  // menghapus id
  afterEach(async () => {
    await FavoriteRestIdb.deleteRestauranFromFavorite('w9pga3s2tubkfw1e867');
  });
  // tes keenam
  it('harus menampilkan widget unlike ketika restaurant telah di like (tes keenam)', async () => {
    await TestFactories.createLikeButtonPresent({ id: 'w9pga3s2tubkfw1e867' });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });

  // tes ketujuh
  it('seharusnya tidak menampilkan widget like ketika restaurant sudah disukai', async () => {
    await TestFactories.createLikeButtonPresent({ id: 'w9pga3s2tubkfw1e867' });

    expect(document.querySelector('[aria-label = "like this restaurant"]'))
      .toBeFalsy();
  });

  // tes kedelapan
  it('harus bisa menghapus restaurant dari favorite ketika tidak disukai (tes kedelapan)', async () => {
    await TestFactories.createLikeButtonPresent({ id: 'w9pga3s2tubkfw1e867' });

    document.querySelector('[aria-label = "unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestIdb.allData()).toEqual([]);
  });

  // tes kesembilan
  it('harus tidak ada error jika restaurant yg unlike tidak ada di dalam list (tes kesembilan)', async () => {
    await TestFactories.createLikeButtonPresent({ id: 'w9pga3s2tubkfw1e867' });

    // misalkan restaurant (w9pga3s2tubkfw1e867) dihapus dari favorite
    await FavoriteRestIdb.deleteRestauranFromFavorite('w9pga3s2tubkfw1e867');

    // misalkan pengguna batal menyukai Restaurant
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestIdb.allData()).toEqual([]);
  });
// batas
});
