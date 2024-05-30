import React from "react";

const DropDown = ({ selectOptions, value, placeholder, name, onSelect }) => {
  return (
    <div className="dropdown dropdown-top dropdown-end ">
      <button className="btn w-28 ">{value || placeholder}</button>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        {selectOptions.map((option) => {
          return (
            <li key={option}>
              <a
                onClick={({ target }) => {
                  onSelect(name, target.innerText);
                }}>
                {option}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
