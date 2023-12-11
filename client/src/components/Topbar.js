import React from "react";
import { Link, Outlet } from "react-router-dom";

const Topbar = () => {
  return (
    <section className="lg:mt-[90px] mt-[129px]">
      <div className="navbar bg-base-100 w-10/12 rounded-md mx-auto mt-20">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">All Restaurants</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="">
            <div>
              <div className="w-32">
                <select className="select select-secondary w-full max-w-xs">
                  <option disabled selected>
                    Criteria
                  </option>
                  <option>Location</option>
                  <option>Name</option>
                  <option>Cuisine</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
