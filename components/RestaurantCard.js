const RestaurantCard = () => {
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  return (
    <div className="restaurant-card" style={styleCard}>
      <img
        className="restaurant-image"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf"
      />
      <h4>Burger King</h4>
      <h5>Burgers, American</h5>
      <h6>4.2 stars</h6>
    </div>
  );
};

export default RestaurantCard;
