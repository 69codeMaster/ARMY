import React, { useState } from "react";
import { fetchOrderData } from "../api/orders";


const MaterialForm = ({ setOrderData }) => {
  const [orderNumber, setOrderNumber] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    setOrderData(fetchOrderData(orderNumber));
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="self-center">
      <input
        type="text"
        placeholder="הזן מספר הזמנה"
        value={orderNumber}
        onChange={({ target }) => setOrderNumber(target.value)}
        className="input input-bordered input-info text-right w-full max-w-xs"
      />
    </form>
  );
};

export default MaterialForm;
