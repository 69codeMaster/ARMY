import React, { useState } from "react";
import Card from "../components/UI/Card";
import MaterialData from "../components/MaterialData";
import MaterialForm from "../components/MaterialForm";
import Button from "../components/UI/Button";
import { setMaterialAmountInStock } from "../api/material";
import { NegativeStock, StockUpdated } from "../components/Alerts/alerts";

function MaterialOverview() {
  const [marerialData, setMarerialData] = useState({
    id: "",
    description: "",
    amountInStock: 0,
    price: "",
  });
  const [updatedAmount, setUpdatedAmount] = useState();
  const handleSave = (event) => {
    event.preventDefault();
    if (updatedAmount < 0) {
      NegativeStock.fire();
      return;
    }

    setMaterialAmountInStock(marerialData.id, updatedAmount);
    StockUpdated.fire();
  };

  return (
    <Card>
      <h1 className="text-gray-300 text-4xl text-center font-semibold p-4">
        {" מסך ניהול  "}
        <span className="text-blue-600 text-center"> {"מלאי"}</span>
      </h1>
      <div className="flex flex-col w-full items-end gap-2 p-2">
        <MaterialForm setMaterial={setMarerialData} />

        {marerialData === undefined ||
          (marerialData?.id !== "" && (
            <>
              <MaterialData
                material={marerialData}
                setUpdatedValue={setUpdatedAmount}
              />

              <div className="self-center ">
                <Button onClick={(e) => handleSave(e)}> {"שמור"} </Button>
              </div>
            </>
          ))}
      </div>
    </Card>
  );
}

export default MaterialOverview;
