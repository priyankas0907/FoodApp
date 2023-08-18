import {CDN_URL} from "../utils/constants"

const styleCard = {
    backgroundColor: "#f0f0f0",
  };

const RestaurantCard = (props) => {
    const { resData } = props;
    
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-400">
        <img
          className="rounded-lg"
          src={ CDN_URL
             +
            resData.info.cloudinaryImageId
          }
        />
        <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(",")}</h4>
        <h4>{resData.info.avgRating} stars</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;
  