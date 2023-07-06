import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";

const Body = () => {
  console.log(restaurantList);

  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            restaurant={restaurant?.data}
            key={restaurant?.data?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
