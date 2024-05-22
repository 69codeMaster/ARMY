import React from "react";

const Header = ({ children }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
};

export default Header;
