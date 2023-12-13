import React, { useContext, useEffect, useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
// import Loading from '../../../Shared/Loading/Loading';
import swal from "sweetalert";
// import toast from 'react-hot-toast';
import useUserData from '../../../../hooks/useUserData'
import MyRestaurantsRow from './MyRestaurantsRow';
import Card from '../../../home/Cards/Card';

const MyRestaurants = () => {
  const [user] = useAuthState(auth);
  const { displayName, email } = user;
  const [userData] = useUserData(user)
  const [darkMode, setDarkMode] = useState(false);

const handleDelete = email => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
        fetch(
          `http://localhost:5000/api/v1/deleteMyRestaurants?email=${userData?._id}`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.message) {
                swal("Your file has been deleted!", {
                    icon: "success",
                  });
              // refetch()
            }
          })
        
      }})}
      const [MyRestaurants, setMyRestaurants] = useState([])
      useEffect(()=>{
        console.log('test', userData);
        fetch(
          `http://localhost:5000/api/v1/get-my-restaurants?email=${userData?._id}`
        ).then((res) => res.json()).then(data => setMyRestaurants(data.restaurants))
      },[userData])
  // if (isLoading) return <Loading></Loading>;


  return (
    <div className="lg:px-4 px-2 pb-5">
      <div className="flex justify-between items-center align-middle">
        <div>
          <button
            className="btn btn-sm  btn-warning"
            // onClick={() => handleDelete(email)}
          >
            delete all
          </button>
        </div>
        <h2 className={`${"text-white"} text-2xl py-4 text-center`}>
          Recomended Restaurants List For Me: {MyRestaurants?.length}
        </h2>
        <div className="flex space-x-4">
          {/* <!--search bar --> */}
          <div hidden className="md:block">
            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
              <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                <svg
                  xmlns="http://ww50w3.org/2000/svg"
                  className="w-4 fill-current"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path>
                </svg>
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Search here"
                className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
              />
            </div>
          </div>
          {/* <!--/search bar --> */}
          <button
            aria-label="search"
            className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
          >
            <svg
              xmlns="http://ww50w3.org/2000/svg"
              className="w-4 mx-auto fill-current text-gray-600"
              viewBox="0 0 35.997 36.004"
            >
              <path
                id="Icon_awesome-search"
                data-name="search"
                d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg"> */}
            { MyRestaurants?.length
              ?
              <div className='flex justify-center items-center m-8'>
              <div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>
            {MyRestaurants
              ?.map((restaurant, index) => (
                <Card restaurant={restaurant}></Card>
                // <div
                //   className={`text-gray-900 sm:container flex flex-col max-w-lg h-56 p-6 mx-auto divide-y rounded-md shadow-xl border w- `}
                // >
                //   <div className="flex justify-between p-4">
                //     <div className="flex items-center space-x-4">
                //       <div>
                //         <img
                //           src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53f59ee3-60ce-4d32-8885-c6f05457259c/dfo4vi6-0ef1ce35-08f1-4303-906f-2fa9babf4b94.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzZjU5ZWUzLTYwY2UtNGQzMi04ODg1LWM2ZjA1NDU3MjU5Y1wvZGZvNHZpNi0wZWYxY2UzNS0wOGYxLTQzMDMtOTA2Zi0yZmE5YmFiZjRiOTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Tie1K3Xy_0BUSmFKubXOSwuNjgdTcpvrXvKx5eoiFrA`}
                //           alt=""
                //           className="object-cover w-12 h-12 rounded-full dark:bg-purple-200"
                //         ></img>
                //       </div>
                //       <div>
                //         <h4 className="font-bold">{review?.name || 'noName'}</h4>
                //       </div>
                //     </div>
                //     <div className="flex items-center space-x-2 dark:text-yellow-500">
                //       <svg
                //         xmlns="http://www.w3.org/2000/svg"
                //         viewBox="0 0 512 512"
                //         className="w-5 h-5 fill-current"
                //       >
                //         <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                //       </svg>
                //       <span className="text-xl font-bold">{review?.rating}</span>
                //     </div>
                //   </div>
                //   <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                //     {String(review.review.slice(0, 70)) }...{" "}
                //   </div>
                // </div>
              ))}
            </div>
            </div>
            :
            <h1 className="text-center mx-auto text-secondary text-2xl my-2">hello <span className="text-success">{user?.displayName}!!</span> Sorry, no restaurant were found for you.</h1>
            }
      </div>
    // </div>
  );
};

export default MyRestaurants;