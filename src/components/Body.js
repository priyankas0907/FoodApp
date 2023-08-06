import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  [listOfRes, setListOfRes] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="btn-filter"
          onClick={() => {
            listOfRes = listOfRes.filter((res) => res.info.avgRating > 4);
            setListOfRes(listOfRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((resrtaurant) => (
          <RestaurantCard key={resrtaurant.info.id} resData={resrtaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
