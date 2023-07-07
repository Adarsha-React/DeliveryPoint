import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  console.log(<Body />);
  return (
    <div className="body">
      <div className="filter-container">
        <div>
          <input type="text" placeholder="Search" />
          <button className="search-btn">Search</button>
        </div>
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              const sortedRestaurants = [...restaurantList].sort(
                (a, b) => a.data.avgRating - b.data.avgRating
              );
              setListOfRestaurants(sortedRestaurants);
            }}
          >
            Ratings
          </button>
          <button
            onClick={() => {
              const filterRestaurant = restaurantList.filter(
                (restaurant) => restaurant?.data?.avgRating > 4.2
              );
              setListOfRestaurants(filterRestaurant);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
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
