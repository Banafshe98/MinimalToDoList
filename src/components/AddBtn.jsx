import React from "react";
import Add from "../assets/Add.svg";

const AddBtn = ({ addItem }) => {
  return (
    <button
      onClick={addItem}
      className="flex items-center justify-center border-none rounded-full bg-lime-500 w-28 h-14 text-white text-lg font-medium cursor-pointer"
    >
      <img src={Add} alt="Add" />
    </button>
  );
};

export default AddBtn;
