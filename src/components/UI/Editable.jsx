import { useEffect, useState } from "react";

const Editable = ({ label, initalValue, setUpdatedValue }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(initalValue);
    setUpdatedValue(initalValue);
  }, [initalValue]);

  return (
    <div className="rounded-md bg-slate-700 w-full p-2 text-right text-2xl text-white">
      <input
        type="number"
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
          setUpdatedValue(target.value);
        }}
        className="input input-bordered input-info w-fit p-6 text-right remove-apperance"
      />
      <strong> : {label} </strong>
    </div>
  );
};

export default Editable;
