const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        alt="resImage"
        src={restaurant.imageUrl}
      />
      <div className="card-details">
        <h4>{restaurant.name}</h4>
        <h6>{restaurant.cuisines}</h6>
        <h6>{restaurant.avgRataing} stars</h6>
      </div>
    </div>
  );
};

export default RestaurantCard;
