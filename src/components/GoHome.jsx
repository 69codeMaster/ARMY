import React from "react";
import { Link } from "react-router-dom";
import { RxExit as HomeIcon } from "react-icons/rx";
import { PATHS } from "../constants";

const GoHome = () => {
  return (
    <Link to={PATHS.Home} className="absolute bottom-5 right-5">
      <div className="text-2xl text-blue-100">
        <HomeIcon />
      </div>
    </Link>
  );
};

export default GoHome;
