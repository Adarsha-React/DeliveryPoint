const RestaurantCard = () => {
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  const restaurant = {
    imageUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    name: "Burger King",
    cuisines: "Burgers, American",
    avgRataing: "4.2",
  };

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
