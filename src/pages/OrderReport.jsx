import React, { useState } from "react";
import Card from "../components/UI/Card";
import OrderReportSelection from "../components/OrderReportSelection";
import OrderReportResult from "../components/OrderReportResult";

function OrderReport() {
  const [orders, setOrders] = useState([]);
  console.log(orders);
  return (
    <Card>
      <h1 className="text-gray-300 text-5xl text-center font-semibold p-4">
        {"דוח הזמנות"}
      </h1>
      <OrderReportSelection setOrders={setOrders} />
      <OrderReportResult orders={orders} />
    </Card>
  );
}

export default OrderReport;
