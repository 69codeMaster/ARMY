import React from "react";

const Cell = ({ name, onChange, value, editable }) => {
  return (
    <td
      className={editable ? "shadow-inner shadow-gray-800 outline-none" : ""}
      contentEditable={editable}
      onInput={(e) => {
        onChange(name, e.target.innerText);
      }}>
      {value}
    </td>
  );
};

export default Cell;
