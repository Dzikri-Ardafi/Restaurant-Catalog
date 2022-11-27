import Config from '../service/globals/config';

const getRestaurantData = (allData) => (
  `<div class='data'>${
    allData
      .map(
        (data) => ` 
          <div class= "card">
          <img class="imgCard lazyload" alt="${data.name}" src="${Config.baseImgURL}medium/${data.pictureId}" data-src="${Config.baseImgURL}medium/${data.pictureId}" alt="${data.name}" />
          <div class="detail">
              <div class="rating">
                  <h3>
                      Rating: ${data.rating}
                  </h3>
              </div>
              <div id="restaurantTitle">
                <a class ="hreffRestaurant" href='/#/detail/${data.id}'>
                  <h1 class="titleRestaurant">${data.name}</h1>
                </a>
              </div>

              <p>${data.city}</p>
              <p>${data.description}</p>
          </div>
          </div>
          `,
      )
      .join('')
  }</div>`
);

const noDataPriview = () => `
            <div id="noFavoriteData">
            <div class = "movie-item_not_found"> 
            <img
            class="noDataImage"
            src="./images/heros/no_data.png"
            alt="noDataImage"
          />
          <h2 style = "text-align : center;">Tidak ada restaurant yang telah disukai</h2>
          </div>
            </div>
        `;

const dataToPreview = {
  getRestaurantData,
  noDataPriview,
};
export default dataToPreview;
