/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
const favRestModel = (favoriteRestaurant) => {
  // tes kesepuluh
  it('harus mengembalikan _restaurant yang telah ditambahkan (tes kesepuluh)', async () => {
    favoriteRestaurant.putRestauranToFavorite({ id: 'w9pga3s2tubkfw1e867' });
    favoriteRestaurant.putRestauranToFavorite({ id: 'rqdv5juczeskfw1e867' });

    expect(await favoriteRestaurant.getRestaurant('w9pga3s2tubkfw1e867'))
      .toEqual({ id: 'w9pga3s2tubkfw1e867' });

    expect(await favoriteRestaurant.getRestaurant('rqdv5juczeskfw1e867'))
      .toEqual({ id: 'rqdv5juczeskfw1e867' });

    expect(await favoriteRestaurant.getRestaurant('s1knt6za9kkfw1e867'))
      .toEqual(undefined);
  });

  // tes kesebelas
  it('harus menolak restaurant jika memiliki properti yang tidak sesuai (tes kesebelas)', async () => {
    favoriteRestaurant.putRestauranToFavorite({ aProperty: 'wrongProperty' });
    expect(await favoriteRestaurant.allData()).toEqual([]);
  });

  // tes keduabelas
  it('bisa mengembalikan semua restarutan yang tlah ditambahkan (tes keduabelas)', async () => {
    favoriteRestaurant.putRestauranToFavorite({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.putRestauranToFavorite({ id: 's1knt6za9kkfw1e867' });

    expect(await favoriteRestaurant.allData())
      .toEqual([
        { id: 'rqdv5juczeskfw1e867' },
        { id: 's1knt6za9kkfw1e867' },
      ]);
  });

  // tes ketigaBelas
  it('harus menghapus favorite restaurant (tes ketigaBelas)', async () => {
    favoriteRestaurant.putRestauranToFavorite({ id: 'w9pga3s2tubkfw1e867' });
    favoriteRestaurant.putRestauranToFavorite({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.putRestauranToFavorite({ id: 's1knt6za9kkfw1e867' });

    await favoriteRestaurant.deleteRestauranFromFavorite('w9pga3s2tubkfw1e867');

    expect(await favoriteRestaurant.allData())
      .toEqual([
        { id: 'rqdv5juczeskfw1e867' },
        { id: 's1knt6za9kkfw1e867' },
      ]);
  });

  // tes keempatBelas
  it('harus menangani request untuk mengahpus a restaurant meskipun restaurant belum ditambahkan (tes keempatBelas)', async () => {
    favoriteRestaurant.putRestauranToFavorite({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.putRestauranToFavorite({ id: 's1knt6za9kkfw1e867' });
    favoriteRestaurant.putRestauranToFavorite({ id: 'w9pga3s2tubkfw1e867' });

    await favoriteRestaurant.deleteRestauranFromFavorite('uewq1zg2zlskfw1e867');

    expect(await favoriteRestaurant.allData())
      .toEqual([
        { id: 'rqdv5juczeskfw1e867' },
        { id: 's1knt6za9kkfw1e867' },
        { id: 'w9pga3s2tubkfw1e867' },
      ]);
  });
};

export { favRestModel };
