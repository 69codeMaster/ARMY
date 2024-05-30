import React from "react";
import OrderData from "./OrderData";

const OrderReportResult = ({ orders, setOrdersStatus }) => {
  return (
    <div className="h-80 overflow-auto">
      {orders?.map((orderData) => {
        return (
          <div className="pb-5" key={orderData.order_number}>
            <div className="px-2 text-right text-white text-2xl font-semibold">
              {orderData.order_number + " הזמנה"}
            </div>
            <OrderData
              key={JSON.stringify(orderData)}
              isCreate={false}
              orderData={orderData}
              setOrderStatus={(newStatus) =>
                setOrdersStatus(orderData.order_number, newStatus)
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default OrderReportResult;
