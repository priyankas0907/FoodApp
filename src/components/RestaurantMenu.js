import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { RES_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  [resInfo, setResInfo] = useState({});

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_URL + resId);

    var json = await data.json();
    console.log(json.data);
    setResInfo(json.data.cards[0].card.card.info);
  };

  return (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biriyani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
