import React from "react";

const Cell = ({ name, onChange, value, editable }) => {
  const editableClass = "shadow-sm";
  const readOnlyClass = "bg-gray-200 cursor-not-allowed outline-none";
  return (
    <td>
      <input
        autoComplete="off"
        type="text"
        readOnly={!editable}
        value={value}
        className={`py-2 text-center rounded-md border-gray-30 ${
          editable ? editableClass : readOnlyClass
        }`}
        onChange={({ target }) => onChange(name, target.value)}
      />
    </td>
  );
};

export default Cell;
