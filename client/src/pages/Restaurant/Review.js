import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { Pagination, FreeMode, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import useUser from "../../hooks/useUserData";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Reviews = () => {
    const restaurantId = useParams();
    const [reviews] = useReviews(restaurantId)
    const [user] = useAuthState(auth)
    const [userData] = useUser(user);
    if(!reviews?.length) return <h2>no review exist for ths restaurant</h2>
  return (
    <div>
      <div className="p-6 md:px-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper"
        >
          {reviews?.map((review) => {
            const { picture, name, rating, review: comment, _id } = review || {};
            
            return (
              <SwiperSlide className="sm:m-10" key={_id}>
                <div
                  className={`text-gray-900 sm:container flex flex-col max-w-lg h-56 p-6 mx-auto divide-y rounded-md shadow-xl border w- `}
                >
                  <div className="flex justify-between p-4">
                    <div className="flex items-center space-x-4">
                      <div>
                        <img
                          src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53f59ee3-60ce-4d32-8885-c6f05457259c/dfo4vi6-0ef1ce35-08f1-4303-906f-2fa9babf4b94.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzZjU5ZWUzLTYwY2UtNGQzMi04ODg1LWM2ZjA1NDU3MjU5Y1wvZGZvNHZpNi0wZWYxY2UzNS0wOGYxLTQzMDMtOTA2Zi0yZmE5YmFiZjRiOTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Tie1K3Xy_0BUSmFKubXOSwuNjgdTcpvrXvKx5eoiFrA`}
                          alt=""
                          className="object-cover w-12 h-12 rounded-full dark:bg-purple-200"
                        ></img>
                      </div>
                      <div>
                        <h4 className="font-bold">{name || 'Adil Ahmed'}</h4>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                      </svg>
                      <span className="text-xl font-bold">{rating}</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    {comment?.slice(0, 70)}...{" "}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <div className=" flex justify-center ">
        <Link to="/dashboard/addReview">
          <button
            className={`hover:bg-teal-800 bg-white text-teal-900 border border-teal-900 hover:text-white sm:px-7 px-5 transition py-1.5 sm:py-2.5 rounded-[3px] mt-5 uppercase flex justify-center items-center`}
          >
            add review{" "}
            <AiOutlineStar className="ml-2 text-orange-400 font-bold text-lg" />
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Reviews;