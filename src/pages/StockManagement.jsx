import React, { useState } from "react";
import Card from "../components/UI/Card";
import MaterialData from "../components/MaterialData";
import MaterialForm from "../components/MaterialForm";
import Button from "../components/UI/Button";
import { setMaterialAmountInStock } from "../api/material";

function MaterialOverview() {
  const [material, setMaterial] = useState({
    id: "",
    description: "",
    amountInStock: 0,
    price: "",
  });
  const [updatedAmount, setUpdatedAmount] = useState();

  const handleSave = (event) => {
    event.preventDefault();
    if (updatedAmount < 0) {
      alert("כמות במלאי לא יכולה להיות שלילית");
      return;
    }
    if (material.id === "") {
      alert("יש להזין חומר");
      return;
    }

    setMaterialAmountInStock(material.id, updatedAmount);
    alert("נתוני חומר עודכנו");
  };

  return (
    <Card>
      <h1 className="text-gray-300 text-4xl text-center font-semibold p-4">
        {" מסך ניהול מלאי חומרים "}
      </h1>
      <div className="flex flex-col w-full items-end gap-2 p-2">
        <MaterialForm setMaterial={setMaterial} />
        <MaterialData material={material} setUpdatedValue={setUpdatedAmount} />
        {material && (
          <div className="self-center" onClick={(e) => handleSave(e)}>
            <Button> {"שמור"} </Button>
          </div>
        )}
      </div>
    </Card>
  );
}

export default MaterialOverview;
