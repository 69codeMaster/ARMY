import React from "react";

const Entry = ({ name, onChange, type, placeholder }) => {
  return (
    <div>
      <h1 className="label label-text text-sm"> {title} </h1>
      <input
        name={name}
        onChange={({ target }) => onChange(field, target.value)}
        type={type || "text"}
        value={value}
        placeholder={placeholder}
        className="w-full input input-border h-10 text-gray-300"
      />
    </div>
  );
};

export default Entry;
