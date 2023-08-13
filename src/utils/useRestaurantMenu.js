import { useEffect, useState } from "react";

import { RES_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {

  const [resInfo, setResInfo] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL + resId);
    const json = await data.json();
    console.log("hook data");
    console.log(json);
    setResInfo(json.data.cards[0].card.card.info);
  };

  return resInfo;
};

export default useRestaurantMenu;
