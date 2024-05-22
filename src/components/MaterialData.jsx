import React from "react";
import Output from "./UI/Output";
import Editable from "./UI/Editable";

const MaterialData = ({ material, setUpdatedValue }) => {
  if (material?.id !== undefined)
    return (
      <div className="flex flex-col gap-5 w-full">
        <Output label={"מספר פריט"} value={material?.id} />
        <Output label={"תיאור פריט"} value={material?.description} />
        <Editable
          label={"כמות במלאי"}
          initalValue={material?.amountInStock}
          setUpdatedValue={setUpdatedValue}
        />
      </div>
    );
  else
    return (
      <div className="flex flex-col gap-5 w-full">
        <div className="text-center text-black text-3xl">{"!חומר לא קיים"}</div>
      </div>
    );
};

export default MaterialData;
