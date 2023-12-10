import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import AddComment from "./AddComment";

function RestaurantReview() {
  return (
    <div className="px-12 py-4">
      <div className="bg-white rounded-xl p-5 shadow-lg">
        <h1 className="text-3xl text-black font-bold">Comments</h1>
        <AddComment />
        {/* Display Comments */}
        <div className="ml-[58px] mt-5" id="commentShow">
          
        </div>
      </div>
    </div>
  );
}

export default RestaurantReview;