import RestaurantCard from "./RestaurantCard";
import { REST_DATA } from "../utils/mock-data";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(REST_DATA);
  useEffect(() => {
    console.log("no dependency array");
  });
  useEffect(() => {
    console.log("on mount");
    // fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json.data.cards[5].card.card.gridElements.infoWithStyles.restaurants
    );
    // setListOfRestaurants(json.data.cards[2].data.data.cards);
    console.log(json);
  };

  return (
    <div className="body">
      <div className="search">search</div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
