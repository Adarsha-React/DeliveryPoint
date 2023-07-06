const RestaurantCard = () => {
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  return (
    <div className="restaurant-card" style={styleCard}>
      <img
        className="restaurant-image"
        alt="resImage"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf"
      />
      <div className="card-details">
        <h4>Burger King</h4>
        <h6>Burgers, American</h6>
        <h6>4.2 stars</h6>
      </div>
    </div>
  );
};

export default RestaurantCard;
