import React, { useState } from "react";
import { MdSend } from "react-icons/md";
let opts;
function AddComment() {
  const [inputText, setInputText] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const sendComment = (e) => {
    e.preventDefault();
    setInputText("");
  };
  const handleSelectChange = (event) => {
    console.log('Selected Value:', selectedValue);
    setSelectedValue(event.target.value);
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
        onChange={handleChange}
        value={inputText}
      ></input>
      <select className="select select-bordered w-full max-w-xs" onChange={handleSelectChange}>
        <option disabled selected>
          Leave A Rating
        </option>
        {opts.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
      </select>
      <button onClick={sendComment}>
        <MdSend className="text-3xl"></MdSend>
      </button>
    </div>
  );
}
opts = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9,
  9.5, 10,
];

export default AddComment;
