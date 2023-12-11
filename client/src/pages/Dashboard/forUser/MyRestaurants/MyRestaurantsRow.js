// import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";

const MyRestaurantsRow = ({ index, quiz, refetch }) => {
  const { quizName, email, quizType, questions, _id, image, phone, role, users } = quiz;
  // const lastEmail = d?.engineer?.email.split("@");
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://...../restaurants/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.message) {
              swal("Your file has been deleted!", {
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <tr className={`bg-gray-800 border-gray-700 odd:bg-gray-800 even:bg-gray-700`}>
      <th
        scope="row"
        className={`text-white px-3 sm:pr-0 sm:pl-8 py-2  sm:py-4 font-medium  whitespace-nowrap text-[13px]`}
      >{index + 1}</th>

      <td className=""><img src={image} alt={quizName}/></td>
      <td className="">{quizName}</td>
      <td className="">{quizType}</td>

      <td className="text-secondary">{questions?.length}</td>
      <td className="text-success font-semibold">
        {users?.length}
      </td>
      <td className="flex flex-col">
          <Link
            to={`/dashboard/quizDetails/${_id}`}
          >
            <button className={`mt-3 btn btn-xs mb-1 bg-slate-800`}>
              details
            </button>
          </Link>
      </td>
    </tr>
  );
};

export default MyRestaurantsRow;