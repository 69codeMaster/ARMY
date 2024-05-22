import React from "react";

function Card({ children }) {
  return (
    <div className="sm:h-[450px] md:h-[550px] bg-gray-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 text-2xl">
      {children}
    </div>
  );
}

export default Card;
