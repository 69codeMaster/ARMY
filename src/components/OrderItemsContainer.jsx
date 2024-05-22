import React, { useState } from "react";
import OrderItem from "./OrderItem";

const OrderItemsContainer = ({ orderItems, setOrderItems }) => {
  return (
    <tbody>
      {orderItems.map((item) => (
        <OrderItem orderItem={item} setOrderItems={setOrderItems} />
      ))}
    </tbody>
  );
};

export default OrderItemsContainer;
