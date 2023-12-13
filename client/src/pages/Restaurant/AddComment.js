import React, { useEffect, useState } from "react";
import { MdSend } from "react-icons/md";
import { useParams } from "react-router-dom";
import useUser from "../../hooks/useUserData";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
let opts;
function AddComment() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [user] = useAuthState(auth);
  const [userData] = useUser(user)
  const {restaurantId} = useParams();
  console.log(userData, 'dd');
  const sendReview = (e) => {
    e.preventDefault();
    if(!rating) return alert('Please Leave a rating')
    if(!review) return alert('Please Leave a review')
    const reviewInstance = { review, rating, restaurantId, userId: userData?._id, name: userData?.name };
    fetch(`http://localhost:5000/api/v1/create-review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInstance),
    })
      .then((res) => res.json())
      .then((data) => {
        setReview("");
        setRating("")
      });
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-5">
      <img
        className="h-[35px] rounded-full"
        src="https://lh3.googleusercontent.com/a/AGNmyxZxcFP3APf4SZkCLm3AFkjIT-BhPlCunuuWs8op=s360"
        alt=""
      />
      <input
        className="py-3 px-5 w-full outline-none border-[#0d9488] border-2 rounded-full"
        type="text"
        id="commentField"
        placeholder="Write a comment..."
        onChange={(e) => setReview(e.target.value)}
        value={review}
      ></input>
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={(e) => setRating(e.target.value)}
      >
        <option disabled selected>
          Leave A Rating
        </option>
        {opts.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <button onClick={sendReview}>
        <MdSend className="text-3xl"></MdSend>
      </button>
    </div>
  );
}
opts = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5
];

export default AddComment;
