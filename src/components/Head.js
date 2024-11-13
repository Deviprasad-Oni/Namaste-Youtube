import React from "react";
import { HAMBURGER_MENU, USER, YOUTUBE_LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const ToggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          className="h-10 cursor-pointer"
          alt="menu"
          src={HAMBURGER_MENU}
          onClick={ToggleMenuHandler}
        />
        <img className="h-10 mx-10" alt="youtube-logo" src={YOUTUBE_LOGO} />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-10" alt="user" src={USER} />
      </div>
    </div>
  );
};

export default Head;
