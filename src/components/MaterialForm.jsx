import React, { useState } from "react";
import { fetchMaterial } from "../api/material";
import { materialNotFound } from "./Alerts/alerts";

const MaterialForm = ({ setMaterial }) => {
  const [materialId, setMaterialId] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const materialData = fetchMaterial(materialId.replace(/^0+/, ""));
    setMaterial(materialData);
    if (materialData === undefined) materialNotFound.fire();
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
