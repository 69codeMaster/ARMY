import React, { useEffect, useState } from "react";
import Card from "../components/UI/Card";
import OrderData from "../components/OrderData";
import OrderForm from "../components/OrderForm";

function OrderOverview() {
  const [orderData, setOrderData] = useState();

  return (
    <Card>
      <h1 className="text-gray-300 text-4xl text-center font-semibold p-4">
        {"צפייה בהזמנה מספר"}
        <span className="text-blue-600 text-center">
          {" "}
          {orderData?.order_number}
        </span>
      </h1>

      <div className="flex flex-col w-full items-end gap-2 p-2">
        <OrderForm setOrderData={setOrderData} />
        <OrderData
          orderData={orderData}
          isCreate={false}
          setOrderStatus={(newStatus) =>
            setOrderData({ ...orderData, status: newStatus })
          }
        />
      </div>
    </Card>
  );
}

export default OrderOverview;
