import { RES_IMG_URL } from "../constants";

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwoString } =
    restaurant;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        alt="resImage"
        src={RES_IMG_URL + cloudinaryImageId}
      />
      <div className="card-details">
        <h4>{name}</h4>
        <h5 className="cuisines">{cuisines.join(", ")}</h5>
        <h5>{avgRating} stars</h5>
        <h6>{costForTwoString}</h6>
      </div>
    </div>
  );
};

export default RestaurantCard;
