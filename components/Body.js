import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const restaurantBurgerKing = {
    imageUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    name: "Burger King",
    cuisines: "Burgers, American",
    avgRataing: "4.2",
  };

  const restaurantKFC = {
    imageUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/56c9ab92bd79745fd152a30fa2525426",
    name: "KFC",
    cuisines: "Burgers, Biriyani",
    avgRataing: "3.8",
  };

  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-container">
        <RestaurantCard restaurant={restaurantBurgerKing} />
        <RestaurantCard restaurant={restaurantKFC} />
      </div>
    </div>
  );
};

export default Body;
