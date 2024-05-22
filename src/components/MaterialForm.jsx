import React, { useCallback, useState } from "react";
import { fetchMaterial } from "../../dummyData";

const MaterialForm = ({ setMaterial }) => {
  const [materialId, setMaterialId] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMaterial(fetchMaterial(materialId.replace(/^0+/, "")));
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="self-center">
      <input
        type="text"
        placeholder="הזן מספר חומר"
        value={materialId}
        onChange={({ target }) => setMaterialId(target.value)}
        className="input input-bordered input-info text-right w-full max-w-xs"
      />
    </form>
  );
};

export default MaterialForm;
