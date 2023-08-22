import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

console.log(Shimmer);

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);//1.
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  // console.log(resInfo?.data?.cards[2]);
  // const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);
  console.log("resInfo1");
  console.log(resInfo?.data?.cards[3]);

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold m-6 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(" ,")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItem={index == showIndex ? true : false}
          setShowIndex={()=> setShowIndex(index)}//2.
        />
      ))}
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item)=>(
          <li key = {item.card.info.id}>{item.card.info.name}
          -{" Rs."} {item.card.info.price/100 || item.card.info.defaultPrice /100}
          </li>
        ))
        }
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
