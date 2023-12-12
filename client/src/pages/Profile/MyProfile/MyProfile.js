import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import useUserData from "../../../hooks/useUserData";
const MyProfile = () => {
  const [toogleProfileEdit, setToogleProfileEdit] = useState(false);
  const [toogleAdditionalProperties, setToogleAdditionalProperties] =
    useState(false);
  const [user] = useAuthState(auth);
  const [userData] = useUserData(user);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handeProfileUpdate = (data) => {
    const profileData = {
      name: data.name,
      phone: data.phone,
      ambiance: data.ambiance,
      cuisines: data.cuisines,
      dietry: data.dietry,
    };
    fetch(`http://localhost:5000/api/v1/user?email=${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profileData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
          reset();
          setToogleProfileEdit(!toogleProfileEdit);
          setToogleAdditionalProperties(!toogleAdditionalProperties);
        }
      });
  };
  return (
    <section className="">
      <h1 className="text-center text-white text-3xl py-3 font-bold border-b-2 border-b-gray-300">
        My Profile
      </h1>
      <div className="flex md:flex-row flex-col md:p-10 p-4 md:space-x-10">
        <div>
          <div className="avatar online">
            <div className="w-24 md:w-32 rounded-full">
              <img
                src={user?.photoURL || `https://i.ibb.co/K035fHn/149071.png`}
                alt="Profile"
              />
            </div>
          </div>
          {toogleProfileEdit ? (
            <div
              onClick={() => setToogleProfileEdit(!toogleProfileEdit)}
              className="my-3 bg-red-600 text-center py-2 rounded-full text-white font-medium cursor-pointer"
            >
              <button className="text-sm"> Cancel Edit</button>
            </div>
          ) : (
            <div
              onClick={() => setToogleProfileEdit(!toogleProfileEdit)}
              className="my-3 bg-blue-600 text-center py-2 rounded-full text-white font-medium cursor-pointer"
            >
              <button className="text-sm"> Edit Profile</button>
            </div>
          )}
          {toogleAdditionalProperties ? (
            <div
              onClick={() =>
                setToogleAdditionalProperties(!toogleAdditionalProperties)
              }
              className="my-3 bg-red-600 text-center py-2 rounded-full text-white font-medium cursor-pointer"
            >
              <button className="text-sm">Cancel Additional</button>
            </div>
          ) : (
            <div
              onClick={() =>
                setToogleAdditionalProperties(!toogleAdditionalProperties)
              }
              className="my-3 bg-blue-600 text-center py-2 rounded-full text-white font-medium cursor-pointer"
            >
              <button className="text-sm">Additional</button>
            </div>
          )}
        </div>
        {toogleProfileEdit ? (
          <form onSubmit={handleSubmit(handeProfileUpdate)}>
            <div className="space-y-2">
              <div className="space-y-1">
                <label className="text-sm text-white font-bold">
                  Enter Your Full Name
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                    minLength: {
                      value: 3,
                      message: "Minimum 3 Character",
                    },
                  })}
                  type="text"
                  defaultValue={userData?.name && userData.name}
                  placeholder={userData?.name ? userData?.name : "Sabbir Ahmed"}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-600 text-sm font-semibold">
                    {errors.name.message}
                  </p>
                )}
                {errors.name?.type === "minLength" && (
                  <p className="text-red-600 text-sm font-semibold">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <label className="text-sm text-white font-bold">
                  Enter Your Email
                </label>
                <input
                  value={user?.email}
                  type="text"
                  placeholder="example@mail.com"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm text-white font-bold">
                  Enter Your Phone
                </label>
                <input
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone is Required",
                    },
                    minLength: {
                      value: 5,
                      message: "Minimum 5 character need",
                    },
                  })}
                  type="text"
                  defaultValue={userData?.phone && userData.phone}
                  placeholder={
                    userData?.phone ? userData.phone : "+8801xxxxxxxxx"
                  }
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.phone?.type === "required" && (
                  <p className="text-red-600 text-sm font-semibold">
                    {errors.phone.message}
                  </p>
                )}
                {errors.phone?.type === "minLength" && (
                  <p className="text-red-600 text-sm font-semibold">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              {toogleAdditionalProperties && (
                <>
                  <div className="space-y-1">
                    <label className="text-sm text-white font-bold">
                      Dietary Restrictions
                    </label>
                    <input
                      {...register("dietary", {
                        minLength: {
                          value: 5,
                          message: "Minimum 5 character need",
                        },
                      })}
                      type="text"
                      defaultValue={userData?.dietry && userData.dietry}
                      placeholder={userData?.dietry || "Potato"}
                      className="input input-bordered w-full max-w-xs"
                    />
                    {errors.dietry?.type === "minLength" && (
                      <p className="text-red-600 text-sm font-semibold">
                        {errors.dietry.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm text-white font-bold">
                      Cuisine Types
                    </label>
                    <input
                      {...register("cuisines", {
                        minLength: {
                          value: 3,
                          message: "Minimum 3 character need",
                        },
                      })}
                      type="text"
                      defaultValue={userData?.cuisines && userData.cuisines}
                      placeholder={userData?.cuisines || "Italian"}
                      className="input input-bordered w-full max-w-xs"
                    />
                    {errors.cuisines?.type === "minLength" && (
                      <p className="text-red-600 text-sm font-semibold">
                        {errors.cuisines.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm text-white font-bold">
                      Preferred Ambiance
                    </label>
                    <input
                      {...register("ambiance", {
                        minLength: {
                          value: 5,
                          message: "Minimum 5 character need",
                        },
                      })}
                      type="text"
                      defaultValue={userData?.ambiance && userData.ambiance}
                      placeholder={userData?.ambiance || "Halal"}
                      className="input input-bordered w-full max-w-xs"
                    />

                    {errors.ambiance?.type === "minLength" && (
                      <p className="text-red-600 text-sm font-semibold">
                        {errors.ambiance.message}
                      </p>
                    )}
                  </div>
                </>
              )}
              <div className="text-center">
                <input
                  className="bg-green-600 py-2 px-7 rounded-full text-white font-bold cursor-pointer"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        ) : (
          <div className="space-y-4 text-white">
            <div className="space-y-2">
              <h2 className="text-sm font-bold">Full Name</h2>
              <p>{userData?.name}</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-bold">Email</h2>
              <p>{userData?.email}</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-bold">Phone</h2>
              <p>{userData?.phone ? userData.phone : "+8801xxxxxxxxx"}</p>
            </div>
            {/* <div className='space-y-2'>
                                <h2 className='text-sm font-bold'>Dietry Restrictions</h2>
                                <p>{userData?.dietry ? userData.dietry : '+8801xxxxxxxxx'}</p>
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-sm font-bold'>Cuisine Types</h2>
                                <p>{userData?.cuisines ? userData.cuisines : '+8801xxxxxxxxx'}</p>
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-sm font-bold'>Ambiance</h2>
                                <p>{userData?.ambiance ? userData.ambiance : '+8801xxxxxxxxx'}</p>
                            </div> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyProfile;
