import RestaurantCard from "./RestaurantCard";
import { REST_DATA } from "../utils/mock-data";
import { useState } from "react";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(REST_DATA);
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="restaurant-container">
                {listOfRestaurants.map(restaurant => (
                    <RestaurantCard 
                        key={restaurant.info.id}
                        data={restaurant}
                    />
                ))}
            </div>
        </div>
    )
}

export default Body;