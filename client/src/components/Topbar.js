import React from "react";
const opts = ["name", "location", "cuisine"];
const Topbar = ({setSearchTerm, setType}) => {

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(e?.target?.value);
    setSearchTerm(e?.target?.value);
  };

  return (
    <section className="lg:mt-[94px] mt-[129px]">
      <div className="navbar bg-base-100 w-10/12 rounded-md mx-auto mt-20">
        <div className="flex-1">
          <h1 className="text-purple-700 font-semibold uppercase text-xl">All Restaurants</h1>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              onChange={(e)=> handleSearch(e)}
            />
          </div>
          <div className="">
            <div>
              <div className="w-32">
                <select
                  className="select select-bordered w-full max-w-xs" 
                  onChange={(e)=> setType(e?.target?.value)}
                >
                  <option disabled selected>
                    All
                  </option>
                  {opts.map((opt) => (
                    <option key={opt} value={opt} className="uppercase">
                      {opt}
                    </option>
                  ))}
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
