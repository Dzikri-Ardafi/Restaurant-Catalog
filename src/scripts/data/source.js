import axios from 'axios';
// eslint-disable-next-line camelcase
import API_Endpoint from '../service/globals/apiEndpoints';

class SourceData {
  static async HomePageData() {
    let dataObj;
    // eslint-disable-next-line no-unused-vars
    const responses = await axios
      // eslint-disable-next-line camelcase
      .get(API_Endpoint.HomePage)
      .then((response) => {
        dataObj = response.data.restaurants;
      });
    return dataObj;
  }

  static async DetailPageData(id) {
    let spesifikRestaurant;
    // eslint-disable-next-line no-unused-vars
    const response = await axios
      // eslint-disable-next-line camelcase
      .get(API_Endpoint.DetailPage(id))
      .then((res) => {
        spesifikRestaurant = res.data.restaurant;
      });

    return spesifikRestaurant;
  }
}

export default SourceData;
