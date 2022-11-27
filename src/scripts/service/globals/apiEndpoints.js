import Config from './config';

// eslint-disable-next-line camelcase
const API_Endpoint = {
  HomePage: `${Config.API_URL}/list`,
  DetailPage: (id) => `${Config.API_URL}/detail/${id}`,
};
// eslint-disable-next-line camelcase
export default API_Endpoint;
