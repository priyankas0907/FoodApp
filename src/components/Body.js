import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  [listOfRes, setListOfRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.8740739&lng=77.6440622"
    );
    console.log(data);
    const jsondata = await data.json();
    // console.log(resList);
    console.log(jsondata.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
    setListOfRes(jsondata?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
   
  };
  return listOfRes.length === 0 ? <Shimmer/> : (
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
