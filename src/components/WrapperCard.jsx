import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`${
        className ? className : "h-[150px] top-[256px] rounded-[8px] bg-white"
      } p-6 rounded-lg shadow-md`}
    >
      {children}
    </div>
  );
};

export default Card;
