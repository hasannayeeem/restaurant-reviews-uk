import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../../shared/Loading/Loading";
import Results from "./Results";
import useRestaurant from "../../../../hooks/useRestaurant";
import { Fade } from "react-reveal";
import RestaurantReview from "../../../Restaurant/RestaurantReview";

const RestaurantDetails = () => {
  const restaurantId = useParams();
  const [restaurant, resLoading] = useRestaurant(restaurantId);
  const [doc, setDoc] = useState(false);

  // if (resLoading) {
  //   return <Loading />;
  // }
  const { users, name, price, restaurantName, duration, img, restaurantType, location, description, _id } =
    restaurant?.singlerestaurant || {};

  return (
    <section className={`bg-[#1B2640] duration-300 lg:px-16`}>
    <div
      className={` min-h-screen mt-20`}
    >
      <div className={`hero-content bg-white mx-12 shadow-2xl py-12 lg:px-12 flex-col lg:flex-row`}>
        <Fade right duration={1500}>
          <div className="">
            <img
              src={img || 'https://etimg.etb2bimg.com/photo/75161189.cms'}
              className="lg:max-w-sm max-w-xs rounded-lg shadow-2xl"
              alt=""
            />
          </div>
        </Fade>
        <Fade left duration={1500}>
          <div className={`lg:ml-8 black pr-12 `}>
            <h1 className="text-3xl font-bold mb-4 pt-4">{name}</h1>
            <h1 className="text-sm font-semibold capitalize  my-1">
              PRICE: ${price || '34 per day'}
            </h1>
            <h1 className="text-sm font-semibold capitalize">
              DURATION: {duration || "per day"}
            </h1>
            <h1 className="text-sm font-semibold capitalize  my-1">
              DISCOUNT: {location || 'random'}
            </h1>
            <p className="py-4">{description}</p>
            <div className="flex">
              <Link to={`/engineers`}>
                <button className="lg:px-8 px-4 py-3 border-2 border-teal-900 bg-teal-900 hover:bg-teal-100 hover:text-teal-900  duration-200 text-white rounded uppercase inline-block mt-4 sm:mt-8 font-semibold mr-2">
                  book restaurant
                </button>
              </Link>
              <Link to={`/workers`}>
                <button className="px-8 py-3 border-2 border-teal-900 bg-teal-900 hover:bg-teal-100 hover:text-teal-900  duration-200 text-white rounded uppercase inline-block mt-4 sm:mt-8 font-semibold">
                  add whitelist
                </button>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
      <RestaurantReview />
    </div>
  </section>
  );
};

export default RestaurantDetails; 