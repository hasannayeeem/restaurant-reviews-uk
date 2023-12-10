import React from "react";
import { Link } from 'react-router-dom';
const Card = ({ restaurant }) => {
  const { name, img, id, rating, location, description } = restaurant;
  return (
    <div>
      <div className={ `bg-white border-white border max-w-sm  px-6 pt-6 pb-2  shadow-lg transform hover:scale-105 transition duration-500 h-[480px]`}>
        <div className="relative">
          <img className="w-full h-52" src={img} alt="Colors" />
          <p className="absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-bl-lg">
            {rating}
          </p>
        </div>
        <h1 className={`text-gray-800 mt-4  text-2xl font-bold cursor-pointer`}>
          {name}
        </h1>
        <h1>
          {location}
        </h1>
        <p>
          {description.slice(0, 80)}...
        </p>
        <div className="my-4">
          <Link to={`/restaurantDetails/${id}`} className='d-block'>
            <button className='mt-4 text-xl w-full text-white bg-[#940d8d] py-2 rounded shadow-lg'>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;