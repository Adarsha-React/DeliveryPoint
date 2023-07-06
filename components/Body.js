import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
