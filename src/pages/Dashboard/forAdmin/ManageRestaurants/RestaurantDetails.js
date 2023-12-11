import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../../shared/Loading/Loading";
import Results from "./Results";
import useRestaurant from "../../../../hooks/useRestaurant";
import { Fade } from "react-reveal";
import RestaurantReview from "../../../Restaurant/RestaurantReview";
import Menu from "./Menu";
let menus;
const RestaurantDetails = () => {
  const restaurantId = useParams();
  const [restaurant, resLoading] = useRestaurant(restaurantId);
  const [doc, setDoc] = useState(false);
  if (resLoading) {
    return <Loading />;
  }
  const {
    users,
    name,
    cuisine,
    restaurantName,
    rating,
    image,
    location,
    description,
    _id,
  } = restaurant || {};

  return (
    <section className={`bg-[#1B2640] duration-300 lg:px-16`}>
      <div className={` min-h-screen mt-20`}>
        <div
          className={`hero-content bg-white mx-12 shadow-2xl py-12 lg:px-12 flex-col`}
        >
        <div
          className={`hero-content bg-white mx-12 shadow-2xl py-12 lg:px-12 flex-col lg:flex-row`}
        >
          <Fade right duration={1500}>
            <div className="">
              <img
                src={image || "https://etimg.etb2bimg.com/photo/75161189.cms"}
                className="lg:max-w-sm max-w-xs rounded-lg shadow-2xl"
                alt=""
              />
            </div>
          </Fade>
          <Fade left duration={1500}>
            <div className={`lg:ml-8 black pr-12 `}>
              <h1 className="text-3xl font-bold mb-4 pt-4">{name}</h1>
              <h1 className="text-sm font-semibold capitalize  my-1">
                Cuisine: {cuisine || "Italian"}
              </h1>
              <h1 className="text-sm font-semibold capitalize">
                Location: {location || "London"}
              </h1>
              <h1 className="text-sm font-semibold capitalize  my-1">
                Rating: {rating || "random"}
              </h1>
              <h1 className="text-sm font-semibold capitalize  my-1">
                Opening Hours: {"Everyday 10:30AM - 11:30 PM"}
              </h1>
              <p className="my-3">{description}</p>
              <div className="flex">
                <Link to={`#`}>
                  <button className="lg:px-8 px-4 py-2 border-2 border-teal-900 bg-teal-900 hover:bg-teal-100 hover:text-teal-900  duration-200 text-white rounded uppercase inline-block mt-2 sm:mt-8 font-semibold mr-2">
                    book restaurant
                  </button>
                </Link>
                <Link to={`#`}>
                  <button className="px-8 py-2 border-2 border-teal-900 bg-teal-900 hover:bg-teal-100 hover:text-teal-900  duration-200 text-white rounded uppercase inline-block mt-2 sm:mt-8 font-semibold">
                    add whitelist
                  </button>
                </Link>
              </div>
            </div>
          </Fade>
        </div>
        <div className="lg:pt-8 pt-8" id="companies">
          <h2
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
            className={`uppercase text-3xl font-bold text-center py-3`}
          >
            <span className="text-[#f61a1a]">Our</span> Restaurant Menus
          </h2>
          <div className="flex justify-center">
            <div className=" rounded-md w-32 h-1 bg-[#f61a1a]"></div>
            <div className=" rounded-md w-4 h-1 mx-2 bg-[#ffd103]"></div>
            <div className=" rounded-md w-2 h-1 bg-[#030303]"></div>
          </div>

          <div className="grid lg:max-w-[1110px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-2 pt-8 pb-24">
            {menus.map((menu, id) => (
              <Menu key={id} menu={menu}></Menu>
            ))}
          </div>
        </div>
        </div>
        <RestaurantReview restaurantId/>
      </div>
    </section>
  );
};
menus = [
  {
    name: "Tomato Basil Bruschetta",
    price: 6.99,
    image: "https://example.com/images/tomato_basil_bruschetta.jpg",
  },
  {
    name: "Pesto Pasta with Sun-Dried Tomatoes",
    price: 11.49,
    image: "https://example.com/images/pesto_pasta.jpg",
  },
  {
    name: "Crispy Calamari",
    price: 9.99,
    image: "https://example.com/images/crispy_calamari.jpg",
  },
  {
    name: "Stuffed Bell Peppers",
    price: 8.49,
    image: "https://example.com/images/stuffed_bell_peppers.jpg",
  },
  {
    name: "Chicken Caesar Salad",
    price: 10.99,
    image: "https://example.com/images/chicken_caesar_salad.jpg",
  },
  {
    name: "Beef and Broccoli Stir-Fry",
    price: 13.99,
    image: "https://example.com/images/beef_broccoli_stir_fry.jpg",
  },
  {
    name: "Margherita Panini",
    price: 7.49,
    image: "https://example.com/images/margherita_panini.jpg",
  },
  {
    name: "Honey Mustard Glazed Salmon",
    price: 15.99,
    image: "https://example.com/images/honey_mustard_salmon.jpg",
  },
  {
    name: "Vegan Chocolate Cake",
    price: 8.99,
    image: "https://example.com/images/vegan_chocolate_cake.jpg",
  },
  {
    name: "Avocado Toast",
    price: 5.99,
    image: "https://example.com/images/avocado_toast.jpg",
  },
  {
    name: "Pulled Pork Sandwich",
    price: 12.49,
    image: "https://example.com/images/pulled_pork_sandwich.jpg",
  },
  {
    name: "Raspberry Cheesecake",
    price: 7.99,
    image: "https://example.com/images/raspberry_cheesecake.jpg",
  },
];
export default RestaurantDetails;
