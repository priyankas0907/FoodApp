import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  [listOfRes, setListOfRes] = useState([]);
  [filteredList, setFilteredList] = useState([]);
  [searchText, setSearchText] = useState('');

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
    setFilteredList(jsondata?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
   
  };

  return listOfRes.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
          <button className="srchButton" onClick={() => {
           const filteredList1= listOfRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
           setFilteredList(filteredList1);
          }}>Search</button>
        </div>
        <button
          className="btn-filter"
          onClick={() => {
            filteredList2 = listOfRes.filter((res) => res.info.avgRating > 4);
            setFilteredList(filteredList2);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((resrtaurant) => (
          <RestaurantCard key={resrtaurant.info.id} resData={resrtaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
