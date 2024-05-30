import React from "react";
import Output from "./UI/Output";
import Editable from "./UI/Editable";

const MaterialData = ({ material, setUpdatedValue }) => {
  return (
    <div className="flex flex-col gap-5 py-4 w-full">
      <Output label={"מספר פריט"} value={material?.id} />
      <Output label={"תיאור פריט"} value={material?.description} />
      <Output label={"מחיר פריט"} value={material?.price} />
      <Editable
        label={"כמות במלאי"}
        initalValue={material?.amountInStock}
        setUpdatedValue={setUpdatedValue}
      />
    </div>
  );
};

export default MaterialData;
