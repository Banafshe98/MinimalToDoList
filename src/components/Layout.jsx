import React from "react";

export const Layout = ({children}) => {
  return (
    <div className="items-center justify-center p-32 bg-slate-900 flex flex-col gap-2 px-5 py-1 ">
      {children}
    </div>
  );
};