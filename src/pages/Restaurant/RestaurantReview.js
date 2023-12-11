import React from "react";
import AddComment from "./AddComment";
import Reviews from "./Review";

function RestaurantReview() {
  return (
    <div className="px-12 py-4">
      <div className="bg-white rounded-xl p-5 shadow-lg">
        <h1 className="text-3xl text-black font-bold">Add A Comment</h1>
        <AddComment />
        {/* Display Comments */}
        <h1 className="text-3xl mt-20 pb-2 text-center text-black font-bold">All Reviews</h1>
        <hr />
        <div className="ml-[58px] mt-5" id="commentShow">
          <Reviews />
        </div>
      </div>
    </div>
  );
}

export default RestaurantReview;