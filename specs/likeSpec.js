/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// INTEGRATION TEST
import FavoriteRestIdb from '../src/scripts/idb/favorite-idb';
import * as TestFactories from './helper/tesFactory';

describe('Like A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });
  // tes pertama
  it('harus menampilkan tombol suka ketika restaurant belum disukai sebelumnya (tes pertama)', async () => {
    await TestFactories.createLikeButtonPresent({ id: 'w9pga3s2tubkfw1e867' });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  // tes kedua
  it('seharusnya tidak menampilkan tombol tidak suke ketika restaurant belum disukai sebelumnya (tes kedua)', async () => {
    await TestFactories.createLikeButtonPresent({ id: 'w9pga3s2tubkfw1e867' });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeFalsy();
  });

  // tes ketiga
  it('harus bisa suka restaurant (test ketiga)', async () => {
    await TestFactories.createLikeButtonPresent({ id: 'w9pga3s2tubkfw1e867' });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestIdb.getRestaurant('w9pga3s2tubkfw1e867');
    expect(restaurant).toEqual({ id: 'w9pga3s2tubkfw1e867' });

    FavoriteRestIdb.deleteRestauranFromFavorite('w9pga3s2tubkfw1e867');
  });

  // tes keempat (tes skenario negatif)
  it('tidak boleh menyukai film lagi ketika film yang sama sudah disukai (tes keempat)'), async () => {
    await TestFactories.createLikeButtonPresent({ id: 'w9pga3s2tubkfw1e867' });

    // misalkan restauran dengan id w9pga3s2tubkfw1e867 sudah masuk ke dalam favorite
    await FavoriteRestIdb.putRestauranToFavorite({ id: 'w9pga3s2tubkfw1e867' });

    // misalkan user menekan tombol suka
    document.querySelector('#likeButton').dispatchEvent(new Element('click'));

    // test jangan sampai ada data yang ganda
    expect(await FavoriteRestIdb.allData()).toEqual([{ id: 'w9pga3s2tubkfw1e867' }]);

    FavoriteRestIdb.deleteRestauranFromFavorite('w9pga3s2tubkfw1e867');
  };

  // tes kelima
  it('data tidak boleh diproses jika tidak memiliki id (tes kelima)', async () => {
    // xit = digunakan agar bug yang ditangkap dinonaktifkan, agar kita tidak mengubah kode yang ada
    await TestFactories.createLikeButtonPresent({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestIdb.allData()).toEqual([]);
  });
// batas
});
