import React, { useState } from "react";
import { fetchOrderData } from "../api/orders";
import { orderNotFound } from "../components/Alerts/alerts";

const SearchOrder = ({ setOrderData }) => {
  const [orderNumber, setOrderNumber] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const orderData = fetchOrderData(orderNumber);
    setOrderData(orderData);
    if (orderData === undefined) orderNotFound.fire();
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

export default SearchOrder;
