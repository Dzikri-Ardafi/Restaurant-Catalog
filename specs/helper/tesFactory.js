/* eslint-disable import/prefer-default-export */
import LikeButtonPresent from '../../src/scripts/utils/like-Initiator';

const createLikeButtonPresent = async (_restaurant) => {
  await LikeButtonPresent.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    _restaurant,
  });
};

export { createLikeButtonPresent };
