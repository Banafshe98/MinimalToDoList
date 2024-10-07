import React from "react";

export const Layout = ({children}) => {
  return (
    <div className="justify-center flex flex-col gap-4 items-center bg-orange-100">
      {children}
    </div>
  );
};