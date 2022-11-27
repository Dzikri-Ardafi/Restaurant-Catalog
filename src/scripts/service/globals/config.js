const Config = {
  API_URL: 'https://restaurant-api.dicoding.dev',
  // eslint-disable-next-line no-useless-concat
  baseImgURL: 'https://restaurant-api.dicoding.dev' + '/images/',
  DATABASE_NAME: 'restaurants-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
  CACHE_NAME: new Date().toISOString(),
};
export default Config;
