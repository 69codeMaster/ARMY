import React, { useState, useEffect } from "react";
import { getMaterialPrice } from "../../dummyData";
import Cell from "./UI/Table/Cell";

const OrderItem = ({ orderItem, setOrderItems }) => {
  const handleChange = (field, value) => {
    setOrderItems((prev) => {
      const otherItems = prev.filter((item) => item.item !== orderItem.item);
      return [...otherItems, { ...orderItem, [field]: value }];
    });
  };

  useEffect(() => {
    setOrderItems((prev) => {
      const otherItems = prev.filter((item) => item.item !== orderItem.item);
      return [
        ...otherItems,
        {
          ...orderItem,
          price: getMaterialPrice(orderItem.material) * orderItem.quantity,
        },
      ];
    });
  }, [orderItem?.material, orderItem?.quantity]);

  return (
    <tr>
      <Cell value={orderItem.item} name={"item"} editable={false} />
      <Cell
        editable={true}
        value={orderItem.material}
        name={"material"}
        onChange={handleChange}
      />
      <Cell
        editable={true}
        value={orderItem.quantity}
        name={"quantity"}
        onChange={handleChange}
      />
      <Cell
        value={isNaN(orderItem.price) ? 0 : orderItem.price}
        name={"price"}
        editable={false}
      />
    </tr>
  );
};

export default OrderItem;
