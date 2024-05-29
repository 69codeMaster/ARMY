import React from "react";
import { ORDER_STATUS } from "../constants";

const OrderStatusButtons = ({ setOrderStatus, orderData }) => {
  return (
    <div className="py-6 overflow-hidden flex justify-between">
      <div
        className={
          orderData.status === ORDER_STATUS.Issued
            ? "btn btn-disabled"
            : "btn btn-secondary"
        }
        onClick={() => setOrderStatus(ORDER_STATUS.Canceled)}>
        {"מחק הזמנה"}
      </div>
      <div
        className={
          orderData.status === ORDER_STATUS.Canceled
            ? "btn btn-disabled"
            : "btn btn-primary"
        }
        onClick={() => setOrderStatus(ORDER_STATUS.Issued)}>
        {"נפק ליחידה"}
      </div>
    </div>
  );
};

export default OrderStatusButtons;
