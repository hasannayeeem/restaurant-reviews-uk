import React, { useState } from "react";
import { MdSend } from "react-icons/md";

function AddComment() {
  const [inputText, setInputText] = useState("");
  let newComment = `
      <div>
        <div className="flex gap-2 mt-5">
          <img
            className="h-[50px] rounded-full"
            src="https://lh3.googleusercontent.com/a/AGNmyxZxcFP3APf4SZkCLm3AFkjIT-BhPlCunuuWs8op=s360"
            alt=""
          />
          <div>
            <p
              className="py-3 px-5 min-w-[150px] outline-none bg-[#eeeeee] border-2 rounded-xl"
              id="commentText"
            >
              ${inputText}
            </p>
            <div className="mt-3 flex ml-1 gap-5">
              <button className="font-bold cursor-pointer">LIke</button>
              <button className="font-bold cursor-pointer">Replay</button>
            </div>
          </div>
        </div>
      </div>
    `;
  if (inputText.length == 1) {
    newComment = `
      <div>
        <div className="flex gap-2 mt-5">
          <img
            className="h-[50px] rounded-full"
            src="https://lh3.googleusercontent.com/a/AGNmyxZxcFP3APf4SZkCLm3AFkjIT-BhPlCunuuWs8op=s360"
            alt=""
          />
          <div>
            <p
              className="py-3 text-5xl px-5 min-w-[150px] outline-none bg-[#eeeeee] border-2 rounded-xl"
              id="commentText"
            >
              ${inputText}
            </p>
            <div className="mt-3 flex ml-1 gap-5">
              <button className="font-bold cursor-pointer">LIke</button>
              <button className="font-bold cursor-pointer">Replay</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  const commentShow = document.getElementById("commentShow");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const sendComment = (e) => {
    e.preventDefault();
    setInputText("");

    commentShow.innerHTML += newComment;
  };

  const handleKeyDown = (e) => {
    sendComment();
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
        onKeyDown={handleKeyDown}
      ></input>
      <button onClick={sendComment}>
        <MdSend className="text-3xl"></MdSend>
      </button>
    </div>
  );
}

export default AddComment;