import { IMG_CDN_URL } from "../utils/constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="card w-56 h-80 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{area}</h6>
      <span>
        <h4 className="font-bold"
          style={
            avgRating < 4 ? { color: "red" } : { color: "blue" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        {/* <h4>{lastMileTravelString}</h4> */}
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;