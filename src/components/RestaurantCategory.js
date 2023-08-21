// import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data , showItem, setShowIndex}) => { //3. passing the prop callback fn
//   const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex(); //5. exceute callback from here
  };
  return (
    //header
    <div>
      <div className="w-6/12 mx-auto  my-4 shadow-lg bg-gray-50 p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick} //4. Create local handleclick
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItem && <ItemsList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
