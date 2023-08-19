import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import { resList } from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  [listOfRes, setListOfRes] = useState([]);
  [filteredList, setFilteredList] = useState([]);
  [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
    console.log(
      jsondata.data.success.cards[1].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
    setListOfRes(
      jsondata?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      jsondata?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const onlineStaus = useOnlineStatus();
  if (onlineStaus === false) return <h1> U r offline!</h1>;

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList1 = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredList1);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className=" px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              filteredList2 = listOfRes.filter((res) => res.info.avgRating > 4);
              setFilteredList(filteredList2);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((resrtaurant) => (
          <Link
            to={"/restaurants/" + resrtaurant.info.id}
            key={resrtaurant.info.id}
          >
            {resrtaurant.info.promoted ? (
              <RestaurantCardPromoted resData={resrtaurant} />
            ) : (
              <RestaurantCard resData={resrtaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
