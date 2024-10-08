import React from "react";

export const Addtask = () => {
  return (
    <div className="flex flex-nowrap items-center bg-gray-300 rounded-full">
      <input
        className="text-md bg-transparent h-14 pl-6 pr-2 border-0 outline-none flex-1 placeholder:text-slate-600 "
        type="text"
        placeholder="Add your task"
      />
      <button className="border-none rounded-full bg-orange-500 w-32 h-14 text-white text-lg font-medium cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
      </button>
    </div>
  );
};
