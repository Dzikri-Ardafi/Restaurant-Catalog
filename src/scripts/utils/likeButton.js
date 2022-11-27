const buttonLikeSession = () => `
    <button aria-label = "like this restaurant" id="likeButton" class="likeButton">
    hy
    <i class="fa fa-heart-o" area-hidden="true"></i>
  </button>
    `;
const buttonUnlikeSession = () => `
    <button aria-label = 'unlike this restaurant' id="likeButton" class = "likeButton">
    hy
        <i class="fa fa-heart" area-hidden='true'></li>
    </button>
`;

// const button = {
//     buttonLikeSession,
//     buttonUnlikeSession
// }
console.log(document.getElementById('likeButton'));
export { buttonLikeSession, buttonUnlikeSession };
