import React from "react";

const Entry = ({ name, onChange, placeholder, title, value }) => {
  return (
    <div className="text-right">
      <h1 className="label label-text text-sm"> {title} </h1>
      <input
        name={name}
        onChange={({ target }) => onChange(name, target.value)}
        value={value}
        placeholder={placeholder}
        className="input input-border h-10 text-right text-black"
      />
    </div>
  );
};

export default Entry;
