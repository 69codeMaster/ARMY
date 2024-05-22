import React from "react";

const Popup = () => {
  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div>
        <input
          type="text"
          placeholder="הזן מספר חומר"
          className="input input-bordered  input-info text-center min-w-60 w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default Popup;
