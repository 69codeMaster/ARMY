import React from "react";

const Entry = ({
  name,
  onChange,
  type,
  placeholder,
  title,
  value,
  readonly,
}) => {
  return (
    <div className="text-right">
      <h1 className="label label-text text-sm"> {title} </h1>
      <input
        readOnly={readonly}
        name={name}
        onChange={({ target }) => onChange(name, target.value)}
        type={type || "text"}
        value={value}
        placeholder={placeholder}
        className="w-full input input-border h-10 text-right text-gray-300"
      />
    </div>
  );
};

export default Entry;
