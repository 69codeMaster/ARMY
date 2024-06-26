import React from "react";
import GoHome from "../GoHome";

function Card({ children }) {
  return (
    <div className="sm:h-[450px] md:h-[550px] min-w-[700px] bg-gray-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 px-4">
      {children}

      <GoHome />
    </div>
  );
}

export default Card;
